const express = require('express');
const userRouter = express.Router();
const { User } = require("../models/User");

// Count the number of users
userRouter.get('/',  (req, res) => {
    User.find({}, { "email": 1, "name": 1, "phone": 1,  "createdAt": 1}, (err, users) => {
        if (err) {
            res.send(err);
        }
        res.send(users);
    })
})

userRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    let foundUser = await User.findById(id);
    if (!foundUser) return res.status(404).json({ errMsg: "User not found!" });

    // After that the page is also deleted
    await User.deleteOne({ _id: id });
    return res.status(200).json({ successMsg: "User successfully deleted!" });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ errMsg: "Something went wrong! Please try again." });
  }
});

module.exports = userRouter;