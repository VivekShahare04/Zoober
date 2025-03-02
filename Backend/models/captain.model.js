const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: 3
        },
        lastname: {
            type: String,
            minlength: 3
            
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },
    socketId: {
        type: String
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: 3
        },
        plateNumber: {
            type: String,
            required: true,
            minlength: 3
        },
        capacity: {
            type: Number,
            required: true,
            min: 1
        },
        vehicleType: {
            type: String,
            enum: ['car', 'motorcycle','auto'],
            required: true
        }
    },
    currentPosition: {
        latitude: {
            type: Number,
            required: false,
        },
        longitude: {
            type: Number,
            required: false,
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
};

captainSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;