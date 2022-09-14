const mongoose = require('mongoose');

const BillboardSchema = new mongoose.Schema({
    owner:{
        type: String,
        required: true
    },
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
        default: 'No Information'
    },
    type:{
        type: String,
        required: true
    },
    area:{
        type: String,
        required: true
    },
    status:{
        type: String,
        default: "Available"
    },
    billboardImg: { type: Object },
});

module.exports = mongoose.model('BillBoard', BillboardSchema);