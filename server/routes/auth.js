const router = require("express").Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send({ message: "Invalid email or password!" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid email or password!" });

    const token = user.generateAuthToken();
    res.status(200).send({data: token, message: "Logged in successfully!"})

  } catch (error) {
    console.error(error);
    res.status(500).send({ messange: "Internal Server Error!" });
  }
});

module.exports = router;
