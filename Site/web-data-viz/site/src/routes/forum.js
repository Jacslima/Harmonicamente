var express = require("express");
var router = express.Router();

var forumController = require("../controllers/forumController");
router.get("/listar/:idForumServer", function (req, res) {
    forumController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    forumController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:mensagem", function (req, res) {
    forumController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario/:idForum", function (req, res) {
    forumController.publicar(req, res);
});

module.exports = router;