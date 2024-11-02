const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/signup', (req, res) => {
    const { email, password } = req.body;

    // Simulate a secure storage
    const userData = { email, password }; // In real cases, use password hashing

    fs.writeFileSync('users.json', JSON.stringify(userData, null, 2), 'utf-8');
    res.status(200).send({ message: 'Signup successful!' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if user exists in our "database"
    const storedUser = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

    if (storedUser.email === email && storedUser.password === password) {
        res.status(200).send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
