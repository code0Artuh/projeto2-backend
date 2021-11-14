const express = require("express");  //chamando o express
const app = express();  //definindo o app como express
require('dotenv').config();

app.use(express.json());  //definindo o JSON no projeto

const Conn = require("./model/conn/index"); //importando a conexao

Conn(); //executa a func de conexao

const paisesRouter = require("./routers/paises.routes");
app.use('/paises',paisesRouter);

const cidadesRouter = require("./routers/cidades.routes");
app.use('/cidades',cidadesRouter);

const estadosRouter = require("./routers/estados.routes");
app.use('/estados',estadosRouter);
