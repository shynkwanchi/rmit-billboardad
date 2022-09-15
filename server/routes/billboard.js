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
      return res.status(500).send("Not a correct file type");
    } else if(req.file) {
      try {
        const owner = req.body.owner;
        const title = req.body.title;
        const price = req.body.price;
        const description = req.body.description;
        const area = req.body.area;
        const billboardType = req.body.type;
        var img = fs.readFileSync(req.file.path);
        var encode_img = img.toString("base64");
        var final_img = {
          contentType: req.file.mimetype,
          image: new Buffer.from(encode_img, "base64").toString("base64"),
        };

        // Check if title input is empty
        if (!title)
          return res.status(400).json("Please enter the title!" );
        // Check if type input is empty
        if (!billboardType)
          return res.status(400).send("Please enter the type!" );
        // Check if area input is empty
        if (!area)
          return res.status(400).send("Please enter the area!" );
        // Check if price input is empty
        if (!price)
          return res.status(400).send("Please enter the price!");

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
        fs.unlink(req.file.path, (err) => {
          if (err) throw err;
        });
        return res
          .status(200)
          .send( "New billboard successfully added!");
      } catch (err) {
        console.error(err);
        return res
          .status(500)
          .send("Something went wrong! Please try again.");
      }
    } else {
      return res.status(500).send("No file found");
    }
  }
);

//Find One and Update
billboardRouter.put('/edit/:_id', function(req, res){
  const title = req.body.title;
  const price = req.body.price;
  const description = req.body.description;
  const area = req.body.area;
  const billboardType = req.body.type;
  billboardSchema.findOneAndUpdate({_id: req.params._id},{ title:title, price:price, description:description, area:area, type: billboardType }, function(err, result){
    res.status(200).json({ successMsg: "Billboard successfully updated!" });
  })
})


// delete a billboard
billboardRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let foundBillboard = await billboardSchema.findById(id);
    if (!foundBillboard)
      return res.status(404).json({ errMsg: "User not found!" });

    // After that the page is also deleted
    await billboardSchema.deleteOne({ _id: id });
    return res.status(200).json({ successMsg: "User successfully deleted!" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errMsg: "Something went wrong! Please try again." });
  }
});

// fetch info of a bill board
billboardRouter.get("/specific/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const billboard = await billboardSchema.find( {_id: id});
    res.send(billboard);
  } catch(err) {
    console.log(err);
    res.send("Error")
  }
  
});


module.exports = billboardRouter;
