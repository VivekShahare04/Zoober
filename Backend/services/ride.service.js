const rideModel = require('../models/ride.model.js');
const mapService = require('../services/maps.service.js');

async function getFare(pickupLocation,destination){
    if(!pickupLocation || !destination){
        throw new Error('Pickup location and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickupLocation, destination);

    const baseFare = {
        car: 50,
        auto: 30,
        motorcycle: 20
    };


    const perKmRate = {  
        car: 15,
        auto: 10,
        motorcycle: 8
    }; 

    
    const perMinuteRate = {
        car: 2,
        auto: 1.5,
        motorcycle: 1
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;
}
module.exports.getFare = getFare;

module.exports.createRide = async ({ userId, pickupLocation, destination, rideType }) => {
    //console.log(userId, pickupLocation, destination, rideType);
    if (!userId || !pickupLocation || !destination || !rideType) {
        throw new Error('All fields are required');
    }

        const fare = await getFare(pickupLocation, destination);
        
        
        const ride = await rideModel.create({
            userId,
            pickupLocation,
            destination,
            rideFare: fare[rideType],
        });

        return ride;
}

