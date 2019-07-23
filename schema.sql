

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables. */

DROP DATABASE IF EXISTS canton;

CREATE DATABASE canton;

USE canton;

CREATE TABLE catalogo_de_equipos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  team_name varchar(55)
);

INSERT INTO catalogos_de_equipos (team_name) VALUES ("smokey the bear");

/*=================================================================*/

CREATE TABLE catalogo_de_usuarios (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name varchar(55) NOT NULL,
  user_team_name varchar(55) NOT NULL
);

INSERT INTO  catalogo_de_usuarios (user_name, user_team_name)
VALUES ("test user 1", "test user team is number one");

/*==================================================================*/

CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id varchar(55),
  email varchar(55)
);

INSERT INTO clientes (user_id, email) VALUES ("1vTPBl9", "Creator@awards.com");
