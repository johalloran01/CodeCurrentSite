// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = 'YOUR_BREVO_API_KEY'; // Later replace this with process.env if using dotenv

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await axios.post(
            'https://api.brevo.com/v3/smtp/email',
            {
                sender: { name: 'Code Current Site', email: 'you@yourdomain.com' },
                to: [{ email: 'your@email.com', name: 'Joshua O\'Halloran' }],
                subject: `New message from ${name}`,
                htmlContent: `
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `
            },
            {
                headers: {
                    'api-key': API_KEY,
                    'Content-Type': 'application/json'
                }
            }
        );

        res.status(200).send({ success: true });
    } catch (err) {
        console.error('Email sending error:', err.response?.data || err.message);
        res.status(500).send({ error: 'Email failed to send.' });
    }
});

app.listen(3000, () => {
    console.log('🚀 Backend running at http://localhost:3000');
});
