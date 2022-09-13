const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: { type: String, require: true, unique: true },

  name: { type: String },

  phone: { type: String, require: true },

  gender: { type: String },

  profileImg: { type: Object },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", UserSchema);

module.exports = { User };
