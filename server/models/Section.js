const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    pageID: {
        type: String,
        required: true,
    },
    sectionName: {
        type: String,
        required: true,
    },
    sectionContent: {
        type: String,
    },
    dateCreated: {
        type: String,
    },
    lastUpdated: {
        type: String,
    },
});

module.exports = mongoose.model('Sections', SectionSchema);