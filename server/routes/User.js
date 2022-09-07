const express = require('express');
const userRouter = express.Router();
const userSchema = require("../models/User");

// Count the number of users
userRouter.get('/', (req, res) => {
    userSchema.find({}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.send(users);
    })
})

module.exports = userRouter;