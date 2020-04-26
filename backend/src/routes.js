const { Router } = require('express');
const UserController = require('./controllers/UserController');


const routes = Router();

routes.post('/user',UserController.insertUser);
routes.get('/user',UserController.loginUser);

routes.get('/user/recover',UserController.recoverPass);

module.exports = routes;