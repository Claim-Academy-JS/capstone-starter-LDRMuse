import dotenv from 'dotenv';

import nodemailer from 'nodemailer';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'browandarrowapp@gmail.com',
    pass: process.env.PASSWORD,
  },
});

export default (user, list) => {
  transporter.sendMail(
    {
      from: 'browandarrowapp@gmail.com',
      to: user,
      subject: 'Client Email List',
      text: list,
    },
    (error, info) => {
      if (error) {
        throw new Error(error);
      }
      return `Email sent: ${info.response}`;
    },
  );
};
