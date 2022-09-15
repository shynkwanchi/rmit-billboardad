const mongoose = require('mongoose');

const PageSchema = new mongoose.Schema({
    pageName:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    dateCreated: {
        type: String,
        default: Date.now().toLocaleString("en-us", {year:"numeric", month:"short", day:"numeric"}),
    },
    lastUpdated: {
        type: String,
        default: Date.now().toLocaleString("en-us", {year:"numeric", month:"short", day:"numeric"}),
    },
});

module.exports = mongoose.model('Pages', PageSchema);