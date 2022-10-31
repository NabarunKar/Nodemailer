const nodemailer = require('nodemailer');

// transporter connects to host domain
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abc@gmail.com', //  your gmail account
        pass: 'def' //  APP PASSWORD, only works when 2FA on your account is enabled.
    }
});


// information about the mail that is going to be sent
// cc and bcc can also be used
let mailOptions = {
    from: 'sender@gmail.com', // TODO: email sender
    to: 'receiver@gmail.com', // TODO: email receiver, supports multiple addresses
    subject: 'Nodemailer - Test',
    text: 'Wooo'
};

// send the mail + callback
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log('Error occurs: ', err);
    }
    else {
        console.log('Email sent!!!');
    }
});