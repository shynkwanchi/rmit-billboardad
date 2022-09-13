const router = require("express").Router();
const { User } = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {

    if (req.body.email == "")
    return res.status(400);
      
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res.status(400).send({ message: "Email has been registed!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    
   await new User({ ...req.body, password: hashPassword, gender: ""}).save();
    res.status(201).send({ message: "User created successfully!" });

  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error!" });
  }
});

module.exports = router;