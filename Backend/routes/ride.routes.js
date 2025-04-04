const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const auth = require('../middlewares/auth.middleware.js');
const rideController = require('../controllers/ride.controller.js');
router.post('/create',auth.authUser,
    body('pickupLocation').isString().isLength({ min: 3 }),
    body('destination').isString().isLength({ min: 3 }),
    body('rideType').isIn(['car', 'motorcycle', 'auto']),
    rideController.createRide
)

module.exports = router;