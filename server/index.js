const express = require('express');
const app = express();
const controller = require('./controller.js');
const path = require('path');

app.use('/:id', express.static(path.join(__dirname, '../public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/photos/:id', (req, res) => {
	controller.getAllPhotos((data) => {
		res.send(data);
	});
});


app.listen(3002, () => {
	console.log('listening on port 3002');
});