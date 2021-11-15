const mongoose = require("mongoose");  //importando o mongoose

const cidadesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    bairros: { type: String, required: true },
    populacao: { type: String, required: true },
    aniversario: {type: String, required: true},
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const cidades = mongoose.model("cidades",cidadesModel); // a criacao do modelo na colection Pessoas

module.exports = cidades; //exportando o modelo pronto
