

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables. */

DROP DATABASE IF EXISTS canton;

CREATE DATABASE canton;

USE canton;

CREATE TABLE catalogo_de_equipos (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(55)
);

INSERT INTO catalogo_de_equipos (nombre) VALUES ("titans");
INSERT INTO catalogo_de_equipos (nombre) VALUES ("crows");
INSERT INTO catalogo_de_equipos (nombre) VALUES ("templars");
INSERT INTO catalogo_de_equipos (nombre) VALUES ("ravegers");
INSERT INTO catalogo_de_equipos (nombre) VALUES ("jarheads");

/*=================================================================*/

CREATE TABLE catalogo_de_usuarios (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre varchar(55) NOT NULL,
  equipo_id INT NOT NULL
);

INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("test user 1", 1);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("joel", 2);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("dominic", 3);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("liliana", 4);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("valentina", 5);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("wendy", 1);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("tommy", 2);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("christian",3);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("emanuel", 4);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("marcos", 5);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("david", 3);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("eduardo", 2);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("gabriela", 1);
INSERT INTO  catalogo_de_usuarios (nombre, equipo_id) VALUES ("jenny", 5);

/*==================================================================*/

CREATE TABLE clientes (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  email varchar(55)
);

INSERT INTO clientes (usuario_id, email) VALUES (1, "Creator@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (2, "abimael@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (3, "javier@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (4, "eduardo4@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (5, "fernanda5@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (6, "july6@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (7, "hC.holaCode@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (8, "sebastian8@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (9, "5989742120@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (10, "antwan@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (11, "sharon@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (12, "gabbyl@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (13, "jennilaCoco@awards.com");
INSERT INTO clientes (usuario_id, email) VALUES (14, "testEmail23@awards.com");
