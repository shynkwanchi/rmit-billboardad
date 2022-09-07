const fs = require("fs");
const router = require("express").Router();
const multer = require("multer");
const { User } = require("../models/User");
const helpers = require("./helper");

// set storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./routes/profileImg");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage, fileFilter: helpers.imageFilter });

router.post("/", upload.single("profileImg"), async (req, res) => {
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
      await User.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $set: {
            profileImg: final_img,
          },
        }
      );
      console.log("Saved To database");
      fs.unlink(req.file.path, (err) => {
        if (err) throw err;
      });
      res.status(200);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error!" });
    }
  }
});

module.exports = router;
