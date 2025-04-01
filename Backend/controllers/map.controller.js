const mapService = require("../services/maps.service.js");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { address } = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinates(address);
        return res.status(200).json(coordinates);
    } catch (error) {
        return res.status(500).json({ 
            success: false,
            message: "Error getting coordinates",
            error: error.message 
        });
    }
};
