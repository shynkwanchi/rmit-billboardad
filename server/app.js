require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const billboardRouter = require("./routes/billboard");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const userRouter = require("./routes/User");
const pageRouter = require("./routes/Page");
const messageRouter = require("./routes/message");
const checkUserInfo = require("./routes/loginToken");
const modifyUserData = require("./routes/modifyUserData");
const uploadProfileImg = require("./routes/uploadProfileImg");

const app = express();

connectDB();

// app.get('/', (req, res) => res.send('Hello world!'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));

// routes
app.use("/billboards", billboardRouter);
app.use("/users", userRouter);
app.use("/pages", pageRouter);
app.use("/messages", messageRouter);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/loginUser", checkUserInfo);
app.use("/api/updateUserData", modifyUserData);
app.use("/api/uploadProfileImg", uploadProfileImg);
