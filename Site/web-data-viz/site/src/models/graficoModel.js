var database = require("../database/config");

function buscarUltimasMensagens() {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `SELECT COUNT(u.idUsuario) as 'Mensagens', fkForum as 'Forum', f.nome as 'Nome'
    FROM usuario as u 
    JOIN mensagem as m 
    ON u.idUsuario = m.fkUsuario 
    JOIN forum as f 
    ON f.idForum = m.fkForum
    group by fkForum;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarUltimasPessoas() {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")
    var instrucao = `SELECT COUNT(idUsuario) as 'Pessoas' FROM usuario;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarUltimasMensagens,
    buscarUltimasPessoas
}
