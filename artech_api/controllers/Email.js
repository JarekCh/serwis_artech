import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const router = express.Router();

export const sendMail = async (req, res) => {
  try {
    const output = `
    <p>Masz nową prośbę o skontaktowanie się</p>
    <h3>Szczegóły kontaktu</h3>
    <ul>  
      <li>Imię: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Temat: ${req.body.subject}</li>      
    </ul>
    <h3>Wiadomość</h3>
    <p>${req.body.message}</p>
  `;

    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_FROM, // generated ethereal user
        pass: process.env.MAIL_PASS, // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Artech Strona" <strona@sewisartech.waw.pl>', // sender address
      to: process.env.MAIL_TO, // list of receivers
      subject: 'Wiadomość ze strony Artech', // Subject line
      text: '', // plain text body
      html: output, // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
