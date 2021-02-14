"use strict";
const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your email is ${process.env.CORREO}`);

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(emailcontent) {
     
    console.log(emailcontent.name);
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",//------>aqui colocar el smtp correspondiente
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // colocar aqui el sender email
      pass: process.env.PASS, // colocar la contraseña del sender email.
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Yeika Foo 👻" <yeikarina.coronell7@gmail.com>', // aqui va el sender email
    to: "yeikarina.coronell7@gmail.com", // lista de los que recibirán el correo separados por ,
    subject: "Helloooo wit Node! ✔", // Asunto
    text: "Hello world?", // plain text body
    html: `<p>Nombre de quien envia:  ${emailcontent.name}<br>
              Telefono: ${emailcontent.phone}<br>
              Compañía: ${emailcontent.company}<br>
              E-mail: ${emailcontent.email}<br>
              Mensaje: ${emailcontent.message}<br>
    </p>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

module.exports = {sendMail}