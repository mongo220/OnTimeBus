var userModel = require('../models/User');
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
}

module.exports = UserController;