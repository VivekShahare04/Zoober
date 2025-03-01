const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller.js');
const auth = require('../middlewares/auth.middleware.js');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('Firstname must be at least 3 characters long'),
], userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
], userController.loginUser);

router.get('/profile',auth.auth,userController.getUser);
router.get('/logout',auth.auth,userController.logout);

module.exports = router;