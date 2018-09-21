var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'student',
	password: 'student',
	database: 'listings'
});

connection.connect(console.log('connected2db'));

function getAllPhotos(callback) {
	connection.query(`SELECT * FROM houses;`, function(err, results) {
		if (err) {
			console.log('err', err);
		} else {
			callback(results);
		}
	});
}
module.exports.getAllPhotos = getAllPhotos;



function getPhotosById(id, callback) {
	connection.query(`SELECT * FROM houses WHERE id = ${id};`, function(err, results){
		if (err) {
			console.log('error @ controller');
			throw err;
		} else {
			console.log('results @ controller', results);
			callback(results);
		}
	});
}



//simple seeding function
// function seed() {
// 	for(var idx = 1; idx <= 17; idx++){
// 		connection.query(`INSERT INTO houses (id, photo_url) VALUES (
// 				${idx - 1},
// 				'https://s3-us-west-1.amazonaws.com/photo-gallery1/1_photos/${idx}.jpg');`, function(err, results) {
// 				if(err){
// 					console.log('err in seed');
// 					throw err;
// 				} else {
// 					console.log('seed working');
// 				}
// 			});
// 	}
// }
// seed();