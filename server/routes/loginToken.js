const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

router.post("/", async (req, res) => {
  const token = req.body.token;
  if (token) {
    const info = jwt.verify(token, process.env.JWTPRIVATEKEY);
    try {
      const userData = await User.findById(info._id);
      const sentData = {
        _id: userData._id,
        email: userData.email,
        name: userData.name,
        username: userData.username,
        phone: userData.phone,
        gender: userData.gender,
        profileImg: userData.profileImg
      };
      res.send(sentData);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal Server Error!" });
    }
  } else {
    console.log("No token!");
  }
});

module.exports = router;
