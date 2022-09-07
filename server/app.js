const express = require('express');
const cors = require('cors');
const bodyParser =require ('body-parser');
const connectDB = require('./config/db');
const billboardRouter = require('./routes/billboard');
const userRouter = require('./routes/User');
const pageRouter = require('./routes/Page');


const app = express();

connectDB();

// app.get('/', (req, res) => res.send('Hello world!'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use("/billboards", billboardRouter);
app.use("/users", userRouter);
app.use("/pages", pageRouter);