CREATE DATABASE harmonicamente;

USE harmonicamente;

CREATE TABLE usuario 
(idUsuario INT primary key auto_increment,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL,
senha CHAR(8) NOT NULL
)auto_increment = 1;

CREATE TABLE concerto 
(idConcerto INT primary key auto_increment,
fkUsuario INT, CONSTRAINT fkUsuario foreign key (fkUsuario) references usuario (idUsuario),
nome VARCHAR(45) NOT NULL,
descricao VARCHAR(30) NOT NULL,
endereco VARCHAR(60) NOT NULL,
dtHora DATETIME NOT NULL
)auto_increment = 10;

CREATE TABLE analytics 
(idAnalytics INT auto_increment,
curtida INT, 
interrese INT,
fkUsuario INT, CONSTRAINT fkU foreign key (fkUsuario) references usuario (idUsuario),
fkConcerto INT, CONSTRAINT fkConcerto foreign key (fkConcerto) references concerto (idConcerto),
Primary key (idAnalytics, fkUsuario, fkConcerto)
)auto_increment = 100; 

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
)auto_increment = 2000;

INSERT INTO forum (nome) VALUES 
('Relatos'),
('Duvidas'),
('Auto Ajuda'),
('Concertos');


