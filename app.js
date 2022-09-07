const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRouter = require('./routes/auth');
const billboardRouter = require('./routes/billboard')

const app = express();
app.use(cors());

connectDB();

app.use('/auth', authRouter);
app.use('/billboards', billboardRouter);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

