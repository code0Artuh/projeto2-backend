const mongoose = require("mongoose");  //importando o mongoose

const cidadesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    bairos: { type: Number },
    populacao: { type: Number },
    aniversario: {type: Number},
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const cidades = mongoose.model("cidades",cidadesModel); // a criacao do modelo na colection Pessoas

module.exports = cidades; //exportando o modelo pronto