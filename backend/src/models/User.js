const options = {
    client: 'mysql',
    connection: {
        host     : 'localhost',
        port     : 3308,
        user     : 'root',
        password : '',
        database : 'ontimebus'
    }
}
const knex = require('knex')(options);

var Usuario = {

    insertUser : function(user){
        
        try{

            knex('tb_usuario').insert(user).then(() => console.log("data inserted"))
            .catch((err) => { console.log(err); throw err })
            .finally(() => {
                knex.destroy();
            });
        }
        catch(ex){
            return ex;
        }
    },

    async validarEmail(email){
        var valid = false;
        try{
            await knex('tb_usuario').select()
            .where('DS_EMAIL',email).then(function(res){
                console.log(res)
                if(res.length >= 1){
                    valid = false;
                }
                else{
                    valid = true;
                }
            }); 
            
            return valid;

        }
        catch(ex){
            console.log(ex);
            throw ex;
        }
    }
}

module.exports = Usuario;