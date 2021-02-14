const { Router } = require('express');
const path = require('path');
const  Mail= require(path.join(__dirname, '../tools/mail.js'));

function getRouter() {
    const router = Router();
    router.post('/sendmail', (request, response) => {       
        Mail.sendMail(request.body).then(res => {
            response.send({"response": "The e-mail was sent correctly!!!"});
        })
    });    
    return router; 
}
module.exports = getRouter();
