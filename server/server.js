// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables from .env

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

// Contact form route (to be used with Brevo)
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const axios = require('axios');

    const response = await axios.post('https://api.brevo.com/v3/smtp/email', {
      sender: { name, email },
      to: [{ email: process.env.RECEIVER_EMAIL }],
      subject: `New message from ${name}`,
      htmlContent: `<p>${message}</p>`
    }, {
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });

    res.status(200).json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('Email error:', error.response?.data || error.message);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
