const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'giftomizeofficial@gmail.com',
    pass: 'drle ikru cyhl eqbc'
  },
  logger: true,
  debug: true
});

const mailOptions = {
  from: 'giftomizeofficial@gmail.com',
  to: 'sanjaychoudhury693@gmail.com',
  subject: 'Giftomize Nodemailer Test',
  text: 'Agar yeh email tumhe mil gaya hai, toh nodemailer bilkul perfect kaam kar raha hai!'
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});