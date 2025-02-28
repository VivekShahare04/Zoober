const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db.js');
dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => { res.send('Hello World') });

const userRouter = require('./routes/user.routes.js');
app.use('/users', userRouter);

module.exports = app;