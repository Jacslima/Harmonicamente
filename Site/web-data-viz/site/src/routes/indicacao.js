var express = require("express");
var router = express.Router();

var indicacaoController = require ("../controllers/IndicacaoController");

// recebendo os dados do html 
router.post("/enviar", function (req, res) {
    IndicacaoController.enviar(req, res);
});

module.exports = router;