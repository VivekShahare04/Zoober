const axios = require('axios');
require('dotenv').config();
module.exports.getAddressCoordinates= async(address)=>{
    try {
        const encodedAddress = encodeURIComponent(address);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${process.env.GOOGLE_MAPS_API}`;
        
        const response = await axios.get(url);
        
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                success: true,
                data: {
                    latitude: location.lat,
                    longitude: location.lng,
                    formattedAddress: response.data.results[0].formatted_address
                }
            };
        } else {
            return {
                success: false,
                message: 'Location not found'
            };
        }
    } catch (error) {
        //console.error('Error in getAddressCoordinates:', error.message);
        throw {
            success: false,
            message: 'Failed to get coordinates',
            error: error.message
        };
    }
}