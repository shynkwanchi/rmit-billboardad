const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    senderEmail:{
        type: String,
        required: true
    },
    billboardOwnerEmail:{
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
        type: String,
        default: Date.now().toLocaleString("en-us", {year:"numeric", month:"short", day:"numeric"}),
    },
});

module.exports = mongoose.model('Message', MessageSchema);