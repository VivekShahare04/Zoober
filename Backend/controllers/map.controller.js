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

module.exports.getDistanceTime = async (req, res) => {
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        return res.status(200).json(distanceTime);
    } catch (error) {
        console.error("Error getting distance and time:", error);
        res.status(500).json({ message: "Internal Server Error", });
    }
}

module.exports.getAutoCompleteSuggestion = async (req, res) => {
    try {
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
        const { input } = req.query;
        const suggestions = await mapService.getAutoCompleteSuggestion(input);
        return res.status(200).json(suggestions);
    } catch (error) {
        console.error("Error getting suggestions:", error);
        return res.status(500).json({ message: "Internal Server Error", });
    }
}
