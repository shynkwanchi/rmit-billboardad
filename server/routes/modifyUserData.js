const router = require("express").Router();
const { User } = require("../models/User");

router.post("/", async (req, res) => {
    try {
        await User.findByIdAndUpdate({ _id: req.body._id }, {$set: req.body});
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal Server Error!" });
    }
});

module.exports = router;