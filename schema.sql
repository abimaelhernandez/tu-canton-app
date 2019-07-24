

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

INSERT INTO catalogo_de_equipos (team_name) VALUES ("titans");
INSERT INTO catalogo_de_equipos (team_name) VALUES ("crows");
INSERT INTO catalogo_de_equipos (team_name) VALUES ("templars");
INSERT INTO catalogo_de_equipos (team_name) VALUES ("ravegers");
INSERT INTO catalogo_de_equipos (team_name) VALUES ("jarheads");

/*=================================================================*/

CREATE TABLE catalogo_de_usuarios (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_name varchar(55) NOT NULL,
  user_team_name varchar(55) NOT NULL
);

INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("test user 1", "titans");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("joel", "crows");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("dominic", "templars");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("liliana", "ravegers");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("valentina", "jarheads");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("wendy", "templars");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("tommy", "ravegers");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("christian", "titans");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("emanuel", "crows");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("marcos", "templars");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("david", "ravegers");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("eduardo", "jarheads");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("gabriela", "templars");
INSERT INTO  catalogo_de_usuarios (user_name, user_team_name) VALUES ("jenny", "ravegers");

/*==================================================================*/

CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id varchar(55),
  email varchar(55)
);

INSERT INTO clientes (user_id, email) VALUES ("1", "Creator@awards.com");
