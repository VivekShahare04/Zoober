const captainModel = require('../models/captain.model.js');
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service.js');
const BlacklistToken = require('../models/blacklistToken.model.js');

module.exports.registerCaptain = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const {fullname,email,password,vehicle} = req.body;
        const iscaptainexist = await captainModel.findOne({ email });
        if(iscaptainexist){
            return res.status(400).json({message: "Captain already exists"});
        }
        
        const hashedPassword = await captainModel.hashPassword(password);
        const captain = await captainService.createCaptain({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword,
            color:vehicle.color,
            plateNumber:vehicle.plateNumber,
            capacity:vehicle.capacity,
            vehicleType:vehicle.vehicleType
        });


        captain.save();

        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.loginCaptain = async (req, res,next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isMatch = await captain.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({ token, captain });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.getCaptainProfile = async (req, res,next) => {
    try {
        const captain = req.captain;
        res.status(200).json(captain);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports.logoutProfile = async (req, res, next) => {
    try {
        
        const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
        await BlacklistToken.create({ token });
        res.clearCookie('token');
        res.status(200).json({ message: "logout Successfully✅" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}