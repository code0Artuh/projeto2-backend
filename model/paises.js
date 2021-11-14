const mongoose = require("mongoose");  //importando o mongoose

const paisesModel = new mongoose.Schema({ //criando nosso modelo do banco
    nome: { type: String, required: true }, // chave/ valor: tipo do valor e se é obrigatorio
    idioma: { type: String, required: true },
    populacao: { type: Number },
    pib: { type: Number },
    dataCriacao: { type: Date, default: Date.now } //default, valor padrao caso nao seja passado
});

const paises = mongoose.model("paises",paisesModel); // a criacao do modelo na colection Pessoas

module.exports = paises; //exportando o modelo pronto