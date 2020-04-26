const { Router } = require('express');
const UserController = require('./controllers/UserController');


const routes = Router();

routes.post('/user/InsertUser',UserController.insertUser);


module.exports = routes;