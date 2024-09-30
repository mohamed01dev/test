const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to receive the IP address
app.post('/api/ip', (req, res) => {
    const ipAddress = req.body.ip;
    console.log('Received IP Address:', ipAddress);
    res.json({ message: 'IP Address received successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
