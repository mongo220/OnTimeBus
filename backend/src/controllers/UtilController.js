var nodemailer = require('nodemailer');

var remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: '',
    port: 587,
    secure: true,
    auth:{
        user: 'n0replyontimebus@gmail.com',
        pass: 'OnTimeBus@2020' }
});

var emailASerEnviado = {
    from: 'n0replyontimebus@gmail.com',
    to: '',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
};

var UtilController = {

    async sendEmail(email){
        console.log('Chegou')
        emailASerEnviado.to = email;
        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
            console.log(error);
            } else {
            console.log('Email enviado com sucesso.');
            }
        });
    }
}

module.exports = UtilController;