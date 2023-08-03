const mongoose = require('mongoose')

const verifySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    verfication: { type: String, required: true },
    createdAt: Date,
    updatedAt: Date
});

const VERIFY = mongoose.model('VERIFY', verifySchema);

module.exports = VERIFY; // Use module.exports instead of export default
