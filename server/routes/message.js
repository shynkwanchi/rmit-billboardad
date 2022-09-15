const express = require('express');
const messageRouter = express.Router();
const messageSchema = require("../models/Message");

// Get all messages
messageRouter.get("/", (req, res) => {
    messageSchema.find({}, (err, messages) => {
      if (err) {
        res.send(err);
      }
      res.send(messages);
    });
  });


// Get messages based on owner's email
messageRouter.get("/my-messages/:email", (req, res) => {
    const billboardOwnerEmail = req.params.email;
    messageSchema.find({ billboardOwnerEmail: billboardOwnerEmail }, (err, messages) => {
      if (err) {
        res.send(err);
      }
      res.send(messages);
    });
});

// Add a new message
messageRouter.post('/', async function(req, res){
    try {
        const senderEmail = req.body.senderEmail;
        const billboardOwnerEmail = req.body.billboardOwnerEmail;
        const billboardID = req.body.billboardID;
        const contactPhone = req.body.contactPhone;
        const message = req.body.message;

        // Check if sender email input is empty
        if (!senderEmail)
            return res.status(400).json({ errMsg: "Please enter the your email address!" });
        // Check if contact phone number input is empty
        if (!contactPhone)
            return res.status(400).json({ errMsg: "Please enter the your phone number!" });
        // Check if area input is empty
        if (!message)
            return res.status(400).json({ errMsg: "Please enter your message!" });

        // Add new message
        const newMessage = new messageSchema({
            senderEmail: senderEmail,
            billboardOwnerEmail: billboardOwnerEmail,
            billboardID: billboardID,
            contactPhone: contactPhone,
            message: message
        });
        await newMessage.save();
        return res.status(200).json({ successMsg: "Your message successfully sent!" });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ errMsg: "Something went wrong! Please try again." });
    }
})


module.exports = messageRouter;