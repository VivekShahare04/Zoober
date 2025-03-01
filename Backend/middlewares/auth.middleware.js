const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

module.exports.auth = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    const isblacklisted = await userModel.findOne({ token:token });
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

