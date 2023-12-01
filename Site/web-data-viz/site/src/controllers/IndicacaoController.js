var usuarioModel = require("../models/IndicacaoModel");

function enviar(req, res){
    var idUsuario = req.body.idServer;
    var concertoIndicado = req.body.concertoIndicadoServer


    if(idUsuario == undefined){
        res.status(400).send("");
    } else if(concertoIndicado == undefined){
        res.status(400).send("");
    }else {

        usuarioModel.enviar(idUsuario, concertoIndicado)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\n...",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
 
module.exports = {
    enviar
};