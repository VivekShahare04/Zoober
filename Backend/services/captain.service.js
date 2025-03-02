const captainModel = require('../models/captain.model.js');

module.exports.createCaptain = async ({
    firstname,email,password,color,plateNumber,capacity,vehicleType,lastname
}) => {
    if (!firstname || !email || !password || !color || !plateNumber || !capacity || !vehicleType) {
        throw new Error("All fields are required");
    }
    const captain = new captainModel({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plateNumber,
            capacity,
            vehicleType
        }
    });
    return captain;
}