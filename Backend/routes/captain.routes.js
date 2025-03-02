const express = require('express')
const router = express.Router()
const {body} = require("express-validator")
const captainController = require('../controllers/captain.controller.js')
const auth = require('../middlewares/auth.middleware.js')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long'),
    body('fullname.firstname').isLength({min: 3}).withMessage('Firstname must be at least 3 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Vehicle must be at least 3 characters long'),
    body('vehicle.plateNumber').isLength({min: 3}).withMessage('Plate number must be at least 3 characters long'),  
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type')
],captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long')
],captainController.loginCaptain);

router.get('/profile',auth.authCaptain,captainController.getCaptainProfile);
router.get('/logout',auth.authCaptain,captainController.logoutProfile);

module.exports = router