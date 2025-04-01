const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./db/db.js');
dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.get('/', (req, res) => { res.send('Hello World') });

const userRouter = require('./routes/user.routes.js');
app.use('/users', userRouter);

const captainRouter = require('./routes/captain.routes.js');
app.use('/captains', captainRouter);

const mapRouter = require('./routes/maps.routes.js');
app.use('/maps', mapRouter);

module.exports = app;