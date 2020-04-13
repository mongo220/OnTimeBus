const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//Conexão com banco de dados
mongoose.connect('mongodb+srv://lucas:lucas@cluster0-knrqk.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Especificando o tipo de data que vai ser utilizado
app.use(express.json());
app.use(routes);


app.listen(3333);