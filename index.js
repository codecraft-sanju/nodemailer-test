const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const PORT = process.env.PORT || 3000;

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

app.get('/test-email', (req, res) => {
  const mailOptions = {
    from: 'giftomizeofficial@gmail.com',
    to: 'sanjaychoudhury693@gmail.com',
    subject: 'Giftomize Nodemailer Test Production',
    text: 'Production server se email aa gaya hai!'
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error aayi: ' + error.message);
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email successfully bhej diya gaya hai!');
    }
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});