// Import Express
const express = require('express');
const app = express();

// Server port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome, Hello to the WebApp Project!');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
