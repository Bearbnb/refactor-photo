CREATE DATABASE IF NOT EXISTS listings;

USE listings;

CREATE TABLE IF NOT EXISTS houses (
	id INT(25),
	photo_url varchar(255)
);

-- CREATE TABLE photos (
-- 	house_id int,
-- 	photo_url varchar(255), 
-- 	FOREIGN KEY (house_id) REFERENCES houses (id) 
-- )

-- INSERT INTO houses (
-- 	id,
-- 	photo_url

-- ) VALUES (),
-- (),
-- (),
-- (),
-- (),
-- (),
-- (),
-- (),
-- ();