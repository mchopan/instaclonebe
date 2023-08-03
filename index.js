const express = require('express');
const mongoose = require('mongoose');
const USER = require('./userModel');
const VERIFY = require('./verifyModel');
const cors = require('cors')
require('dotenv').config();
const ObjectId = mongoose.Types.ObjectId;

const app = express();
const PORT = process.env.PORT || 3000;
const CONNECTION_URL = process.env.CONNECTION_URL;

app.use(express.json()); // Add this middleware to parse JSON requests
app.use(cors())
// Set up MongoDB connection
mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// Create a new user route
app.post('/users', async (req, res) => {
    const { username, password } = req.body;
    const customId = new ObjectId();

    const newUser = new USER({
        _id: customId,
        username,
        password,
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser); // Return the saved user
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.post('/verify', async (req, res) => {
    const { verfication } = req.body;
    const customId = new ObjectId();

    const newVerify = new VERIFY({
        _id: customId,
        verfication,
    });

    try {
        const savedVerify = await newVerify.save();
        res.status(201).json(savedVerify); // Return the saved user
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})
