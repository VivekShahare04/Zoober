const userService = require("../services/user.service.js");
const userModel = require("../models/user.model.js");
const { validationResult } = require('express-validator');
const BlacklistToken = require('../models/blacklistToken.model.js');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { fullname, email, password } = req.body;
        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await userModel.hashPassword(password);

        const user = await userService.createUser({
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            email,
            password: hashedPassword
        });

        user.save();

        const token = user.generateAuthToken();
        res.status(201).json({ token, user });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.loginUser = async (req, res, next) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        
        const user = await userModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = user.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({ token, user });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.getUser = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports.logout = async (req, res, next) => {
    try {
        
        const token = req.cookies.token || req.headers.authorization.split(' ')[1];
        await BlacklistToken.create({ token });
        res.clearCookie('token');
        res.status(200).json({ message: "User logged out" });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}