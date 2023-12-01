var graficoModel = require("../models/graficoModel");

function buscarUltimasMensagens(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    graficoModel.buscarUltimasMensagens().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarUltimasPessoas(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    graficoModel.buscarUltimasPessoas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    buscarUltimasMensagens,
    buscarUltimasPessoas

}