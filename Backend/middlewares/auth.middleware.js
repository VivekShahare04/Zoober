const userModel = require('../models/user.model');
const captainModel = require('../models/captain.model');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const BlackListModel = require('../models/blacklistToken.model.js');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isblacklisted = await BlackListModel.findOne({ token:token });
    if (isblacklisted) {
        return res.status(401).json({ message: 'Token blacklisted' });
    }
    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
        const user = await userModel.findById(decoded._id);
        
        req.user = user;
        return next();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isblacklisted = await BlackListModel.findOne({ token:token });
    if (isblacklisted) {
        return res.status(401).json({ message: 'Token blacklisted' });
    }
    try {
        const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
        const captain = await captainModel.findById(decoded._id);
        
        req.captain = captain;
        return next();
    }catch (err) {
        res.status(500).json({ error: err.message });
    }
}