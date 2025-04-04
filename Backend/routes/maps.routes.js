const express = require('express');
const { query } = require('express-validator');
const router = express.Router();
const auth = require('../middlewares/auth.middleware.js');
const {getCoordinates,getDistanceTime,getAutoCompleteSuggestion} = require('../controllers/map.controller.js');


router.get('/get-coordinates',
    query('address').isString().isLength({min: 3}),
    auth.authUser,getCoordinates);

router.get('/get-distance-time',
    query('origin').isString().isLength({min: 3}),
    query('destination').isString().isLength({min: 3}),
    auth.authUser,getDistanceTime);

router.get('/get-suggestion',
    query('input').isString().isLength({min: 3}),
    auth.authUser,getAutoCompleteSuggestion);

module.exports = router;