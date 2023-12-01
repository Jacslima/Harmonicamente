var express = require("express");
var router = express.Router();

var graficoController = require("../controllers/graficoController");

router.get("/exibirTotalDeMensagens", function (req, res) {
    graficoController.buscarUltimasMensagens(req, res);
})

router.get("/exibirTotalPessoas", function (req, res) {
    graficoController.buscarUltimasPessoas(req, res);
})



module.exports = router;