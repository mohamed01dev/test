const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to receive the data
app.post('/inst', (req, res) => {
    const { acc, pass, ip } = req.body;

    if (!acc || !pass || !ip) {
        return res.status(400).json({ error: 'Missing account, password, or IP address in request body.' });
    }

    console.log('Account:', acc, 'Password:', pass, 'IP Address:', ip);
    res.status(200).json({ message: 'Data received successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
