const express = require('express');
const billboardRouter = express.Router();
const billboardSchema = require("../models/Billboard");

// Count the number of billboards
billboardRouter.get('/', (req, res) => {
    billboardSchema.find({}, (err, billboards) => {
        if (err) {
            res.send(err);
        }
        res.send(billboards);
    })
})

module.exports = billboardRouter;