const mongoose = require("mongoose");  //importando o mongoose

const estadosModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    regiao: { type: String, required: true },
    populacao: { type: Number },
    salario: { type: Number },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const estados = mongoose.model("estados",estadosModel); // a criacao do modelo na colection Pessoas

module.exports = estados; //exportando o modelo pronto