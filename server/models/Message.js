const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    senderEmail:{
        type: String,
        required: true
    },
    billboardOwnerEmail:{
        type: String
    },
    billboardID:{
        type: String
    },
    contactPhone:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Message', MessageSchema);