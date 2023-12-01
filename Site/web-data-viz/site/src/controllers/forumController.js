var forumModel = require("../models/forumModel");

function listar(req, res) {
    var idForum = req.params.idForumServer;

    if (idForum == undefined) {
        res.status(400).send('idForum indefinido!');
    } else {
        forumModel.listar(idForum).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

}

function listarPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    forumModel.listarPorUsuario(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function pesquisarMensagem(req, res) {
    var mensagem = req.params.mensagem;

    forumModel.pesquisarMensagem(mensagem)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var mensagem = req.body.mensagem;
    var idUsuario = req.params.idUsuario;
    var idForum = req.params.idForum;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (mensagem == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else if (idForum == undefined) {
        res.status(403).send("O id do forum está indefinido!")
    } else {
        forumModel.publicar(titulo, mensagem, idUsuario, idForum)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    listar,
    listarPorUsuario,
    pesquisarMensagem,
    publicar
}