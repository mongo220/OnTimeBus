var userModel = require('../models/User');


var UserController = {

    async insertUser(req,res){
        let user = {};
        user = userModel.insertUser()

        return res.json({user});
    },

}

module.exports = UserController;