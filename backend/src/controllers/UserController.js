var userModel = require('../models/User');
var UtilController = require('./UtilController');
var sha1 = require('sha1');
var moment = require('moment');

var UserController = {

    async insertUser(req,res){

        try{
            let user = req.body;
            var data = {};
            user.DS_SENHA = sha1(user.DS_SENHA);
            user.DT_CADASTRO = moment().format('YYYY/MM/DD, hh:mm:ss')
            var validarEmail = await userModel.validarEmail(user.DS_EMAIL);
            if(validarEmail){
                userModel.insertUser(user);
                data.status = 200;
                data.msg = "Usuário cadastrado com sucesso!";
                return res.json({data});
            }
            else{
                data.status = 201;
                data.msg = "E-mail já cadastrado no sistema!";
                return res.json({data});
            }
                
        }
        catch(ex){
            data.status = 400;
            data.msg = ex;
        }

    },

    async loginUser(req,res){

        var { DS_EMAIL,DS_SENHA } = req.body;
        var data = {}
        DS_SENHA = sha1(DS_SENHA);


        var userData = await userModel.loginUser(DS_EMAIL,DS_SENHA);

        if(userData){
            data.status = 202;
            data.msg = "Usuário autenticado!";
            data.userData = userData;
            return res.json({data});
        }
        else{
            data.status = 405;
            data.msg = "E-mail ou senha inválidos!"
            return res.json({data});
        }
        

    },

    async recoverPass(req,res){
        const { email } = req.body;
        console.log(email);
        
    },
}

module.exports = UserController;