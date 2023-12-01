-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

CREATE DATABASE harmonicamente;

USE harmonicamente;

CREATE TABLE usuario 
(idUsuario INT primary key auto_increment,
nome VARCHAR(45) NOT NULL,
email VARCHAR(45) NOT NULL UNIQUE,
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


INSERT INTO usuario (nome, email, senha) VALUES
('Jacson', 'Jacson.exemple@gmail.com', '12345678'),
('Camilly', 'Camilly.exemple@gmail.com', '12345679'),
('Maria', 'Maria.exemple@gmail.com', '12345677'),
('Rafaella', 'Rafa.exemple@gmail.com', '12345676'),
('Pedro', 'Pedro.exemple@gmail.com', '12345675'),
('Julya', 'Julya.exemple@gmail.com', '12345674'),
('Amanda', 'Amanda.exemple@gmail.com', '12345673'),
('Caique', 'Caique.exemple@gmail.com', '12345672'),
('Lucas', 'Lucas.exemple@gmail.com', '12345671'),
('Leonardo', 'Leonardo.exemple@gmail.com', '12345670'),
('Daniel', 'Daniel.exemple@gmail.com', '12345669'),
('Igor', 'igor.exemple@gmail.com', '12345668');

INSERT INTO forum (nome) VALUES 
('Relatos'),
('Duvidas'),
('Auto Ajuda');

INSERT INTO mensagem (titulo, mensagem, fkUsuario,fkForum) VALUES
('Experiencia na musicioterapia', 'Estou me sentido feliz aonde eu tenho chegado', 1, 1000),
('Preciso de ajuda', 'Não entendi muito bem o que é musicoterapia', 2, 1001),
('Ajuda!', 'Estou me sentindo triste ultimamente, o que posso fazer?', 3, 1002),
('Faculdade', 'Estou com dúvidas sobre se devo cursar musicoterapia', 1, 1001),
('Experiencia na musicioterapia', 'Amei!!!!!', 1, 1000),
('Preciso de ajuda', 'Não entendi muito bem o que é musicoterapia', 2, 1000);

SELECT * FROM forum;
SELECT * FROM usuario;

SELECT u.nome, m.titulo, m.mensagem, f.nome, idForum
FROM usuario as u JOIN mensagem as m ON m.fkUsuario = u.idUsuario
JOIN forum as f ON m.fkForum = f.idForum;

SELECT u.nome, m.titulo, m.mensagem, f.nome, idForum
FROM usuario as u JOIN mensagem as m ON m.fkUsuario = u.idUsuario
JOIN forum as f ON m.fkForum = f.idForum WHERE u.nome = 'Jacson';

SELECT u.nome, m.titulo, m.mensagem, f.nome, idForum
FROM usuario as u JOIN mensagem as m ON m.fkUsuario = u.idUsuario
JOIN forum as f ON m.fkForum = f.idForum WHERE idForum = 1001;

SELECT COUNT(u.idUsuario) as 'Mensagens', fkForum as 'Forum', f.nome as 'Nome'
FROM usuario as u 
JOIN mensagem as m 
ON u.idUsuario = m.fkUsuario 
JOIN forum as f 
ON f.idForum = m.fkForum
group by fkForum;

SELECT COUNT(idUsuario) as 'Pessoas' FROM usuario;

CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
GRANT insert, select, update, delete on harmonicamente.* TO 'usuario'@'localhost';
FLUSH PRIVILEGES;