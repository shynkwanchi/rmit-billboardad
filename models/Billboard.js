const mongoose = require('mongoose');

const BillboardSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true,
        default: 'No Information'
    }
});

module.exports = mongoose.model('BillBoard', BillboardSchema);