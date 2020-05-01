const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3333; //porta padrão
const routes = require('./routes');
const cors = require('cors');


app.use(cors());

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

//inicia o servidor
app.listen(port);
