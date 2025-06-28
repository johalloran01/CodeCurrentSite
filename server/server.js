import { rateLimit } from 'express-rate-limit'

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 request per 1 minute
    limit: 1
})
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files (media, index.html, style.css, etc.)

//potential
app.use(express.static(path.join(__dirname, '../static/')));

// Contact form endpoint
app.post('/api/contact', limiter, async (req, res) => {
    const { name, email, message } = req.body;

    const data = {
        sender: {
            name: "Code Current Contact Form",
            email: process.env.VERIFIED_EMAIL
        },
        replyTo: {
            email,
            name
        },
        to: [{ email: process.env.RECEIVER_EMAIL, name: "Josh" }],
        subject: "📩 New Contact Form Submission",
        htmlContent: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
        tags: ["contact-form"]
    };

    try {
        const response = await axios.post('https://api.brevo.com/v3/smtp/email', data, {
            headers: {
                'api-key': process.env.BREVO_API_KEY,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        console.log("✅ Email sent:", response.data);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("❌ Brevo error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to send email." });
    }
});


// Fallback: always serve index.html for any GET route (for SPA or direct access)
const indexPath = path.resolve(__dirname, '..', 'index.html');
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(indexPath);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
