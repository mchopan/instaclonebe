const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

const USER = mongoose.model('USER', userSchema);

module.exports = USER; // Use module.exports instead of export default
