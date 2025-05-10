const express = require('express');
const nodemailer = require('nodemailer');

const router = express.Router();

// POST /api/contact - handle contact form submission
router.post('/', async (req, res) => {
  const { fullName, email, mobileNumber, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields' });
  }

  // Create transporter for Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // your Gmail address
      pass: process.env.GMAIL_PASS, // your Gmail app password or OAuth token
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Contact Form: ${subject}`,
    text: `
      You have a new message from your website contact form.

      Name: ${fullName}
      Email: ${email}
      Mobile Number: ${mobileNumber || 'N/A'}
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

module.exports = router;
