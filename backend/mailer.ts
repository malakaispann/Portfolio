const nodemailer = require('nodemailer') ;
const GLOBAL = require('./global') ;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: GLOBAL.mailer_addr,
        pass: GLOBAL.mailer_pw
    }
}) ;

const options = {
    from: GLOBAL.mailer_addr,
    to: GLOBAL.email_addr,
    subject: "Testing",
    text: "This is a test email"
}

const sendEmail = () => {

    transporter.sendMail(options, (error, info) => {
        if (error){
            console.log(`Message failed to send: ${error}`) ;
        } else {
            console.log(`Message sent successfully: ${info.response}}`)
        }
    }) ;
}

sendEmail() ;

export default sendEmail ;