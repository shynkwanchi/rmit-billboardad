const express = require("express");
const billboardRouter = express.Router();
const billboardSchema = require("../models/Billboard");
const fs = require("fs");
const router = require("express").Router();
const multer = require("multer");
const helpers = require("./helper");

// set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./routes/billboardImg");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage, fileFilter: helpers.imageFilter });

// Count the number of billboards
billboardRouter.get("/", (req, res) => {
  billboardSchema.find({}, (err, billboards) => {
    if (err) {
      res.send(err);
    }
    res.send(billboards);
  });
});

// Get a billboard based on user's email
billboardRouter.get("/my-billboards/:email", (req, res) => {
  const owner = req.params.email;
  billboardSchema.find({ owner: owner }, (err, billboards) => {
    if (err) {
      res.send(err);
    }
    res.send(billboards);
  });
});

// Add a new billboard
billboardRouter.post(
  "/",
  upload.single("billboardImg"),
  async function (req, res) {
    if (req.fileValidationError) {
      return res.status(500);
    } else {
      var img = fs.readFileSync(req.file.path);
      var encode_img = img.toString("base64");
      var final_img = {
        contentType: req.file.mimetype,
        image: new Buffer.from(encode_img, "base64").toString("base64"),
      };

      try {
        const owner = req.body.owner;
        const title = req.body.title;
        const price = req.body.price;
        const description = req.body.description;
        const area = req.body.area;
        const billboardType = req.body.type;

        // Check if title input is empty
        if (!title)
          return res.status(400).json({ errMsg: "Please enter the title!" });
        // Check if type input is empty
        if (!billboardType)
          return res.status(400).json({ errMsg: "Please enter the type!" });
        // Check if area input is empty
        if (!area)
          return res.status(400).json({ errMsg: "Please enter the area!" });
        // Check if price input is empty
        if (!price)
          return res.status(400).json({ errMsg: "Please enter the price!" });

        // Add new billboard
        const newBillboard = new billboardSchema({
          owner: owner,
          title: title,
          type: billboardType,
          area: area,
          price: price,
          description: description,
          billboardImg: final_img,
        });
        await newBillboard.save();
        return res
          .status(200)
          .json({ successMsg: "New billboard successfully added!" });
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .json({ errMsg: "Something went wrong! Please try again." });
      }
    }
  }
);

module.exports = billboardRouter;
