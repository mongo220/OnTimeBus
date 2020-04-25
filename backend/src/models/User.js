var db = require('./dbconnection');

var userData = {
    ID_USUARIO : 0,
    DS_NOME:  "",
    DS_SOBRENOME: "",
    DS_EMAIL : "",
    DS_SENHA : "",
    DT_CADASTRO: ""
}

var Usuario = {

    insertUser : function(){

        userData.ID_USUARIO = 1;
        userData.DS_NOME = 'Lucas Vilas Boas';
        userData.DS_EMAIL = 'lucasvilasboaslage@gmail.com';

        return userData;
    },
}

module.exports = Usuario;