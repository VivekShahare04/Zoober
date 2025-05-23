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

module.exports.getDistanceTime = async(origin, destination) => {
    if(!origin||!destination){
        throw new Error ('Origin and destination are required');
    }
        const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.GOOGLE_MAPS_API}`
        
    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
                throw new Error('No route found');
            }
            return response.data.rows[0].elements[0];
        } else {
            throw new Error('Failed to get distance and time');
        }
    } catch(error) {
        //console.error('Error in getDistanceTime:', error.message);
        console.error(error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestion = async(input)=>{
    if(!input){
        throw new Error ('Input is required');
    }
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${process.env.GOOGLE_MAPS_API}`;
    try {
        const response = await axios.get(url);
        if(response.data.status !== 'OK'){
            return response.data.predictions;
        }
    } catch (error) {
        console.error('Error in getAutoCompleteSuggestion:', error.message);
        throw error;
    }
}
