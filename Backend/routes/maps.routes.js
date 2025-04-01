const express = require('express');
const { query } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/auth.middleware.js');
const {getCoordinates} = require('../controllers/map.controller.js');

router.get('/get-coordinates',
    query('address').isString().isLength({min: 3}),
    auth.authUser,getCoordinates);

module.exports = router;