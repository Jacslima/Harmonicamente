CREATE DATABASE harmonicamente;

USE harmonicamente;

CREATE TABLE usuario 
(idUsuario INT primary key auto_increment,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
senha CHAR(8) NOT NULL
)auto_increment = 1;

CREATE TABLE formulario 
(idFormulario INT primary key auto_increment,
musicaFavorita varchar(45),
escala INT,
concertos char(3),
fkUsuario INT, CONSTRAINT fkUsuario foreign key (fkUsuario) references usuario (idUsuario)
)auto_increment = 10;


CREATE TABLE forum 
(idForum INT primary key auto_increment,
nome VARCHAR(45) NOT NULL,
dtCriacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)auto_increment = 1000;

CREATE TABLE mensagem 
(idMensagem INT auto_increment,
fkUsuario INT, CONSTRAINT fkUsu foreign key (fkUsuario) references usuario (idUsuario),
fkForum INT, CONSTRAINT fkForum foreign key (fkForum) references forum (idForum),
titulo VARCHAR(45) NOT NULL,
mensagem VARCHAR(200) NOT NULL,
dtCricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(idMensagem, fkUsuario, fkForum)
)auto_increment = 100;

INSERT INTO forum (nome) VALUES 
('Relatos'),
('Duvidas'),
('Auto Ajuda');

SELECT * FROM usuario;