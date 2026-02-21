const express = require('express');
const { Resend } = require('resend');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;

const resend = new Resend('re_jR4bctsP_KCTypEph3zCdgSZ921RN8wct');

app.get('/test-email', async (req, res) => {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'sanjaychoudhury693@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>sanjay</strong>!</p>'
    });

    console.log('Email sent: ', data);
    res.send('Email successfully bhej diya gaya hai!');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error aayi: ' + error.message);
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});