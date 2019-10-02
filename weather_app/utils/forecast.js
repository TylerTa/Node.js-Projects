/**************************************************************
 * Ep37: Callback Abstraction Challenge
 * - Implement creating a seperate functions for Dark Sky API
 **************************************************************/

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

/*******************
 * Core Modules
 *******************/

/******************
 * NPM Packages
 ******************/
const request = require('request');

/******************
 * Custom Modules
 ******************/

const forecast = (latitude, longitude, callback) => {
    // NOTE: Reference Dark Sky API for 'Forecast Request' 
    //     - Request Parameter/Query String within the URL
    const url = `https://api.darksky.net/forecast/e06aa10d90db16967f763aa7780de9a5/${latitude},${longitude}`;

    // NOTE: the request() function takes in 2 argv
    // - Option Object (reference DarkSky Documentation)
    // - Function: This is the function takes in 2 argv (error, response) to run when we get a response back

    // request({ url: url, json: true }, (error, response) => {
    //     if (error) {
    //         // console.log('Unable to connect to weather service!');
    //         // console.log(error);
    //         callback('Unable to connect to weather service!', undefined);
    //     } else if (response.body.error) {
    //         // console.log('Unable to find location');
    //         callback('Unable to find location');
    //     } else {
    //         const current_weather_object = response.body.currently;
    //         const daily_weather = response.body.daily;

    //         // console.log(`${daily_weather.data[0].summary} It is currently ${current_weather_object.temperature} degrees out. There is ${current_weather_object.precipProbability}% chance of rain`);
    //         callback(undefined, `${daily_weather.data[0].summary} It is currently ${current_weather_object.temperature} degrees out. There is ${current_weather_object.precipProbability}% chance of rain`);
    //     }
    // });

    request({url, json: true }, (error, {body}) => {
        if (error) {
            // console.log('Unable to connect to weather service!');
            // console.log(error);
            callback('Unable to connect to weather service!', undefined);
        } else if (body.error) {
            // console.log('Unable to find location');
            callback('Unable to find location');
        } else {
            const current_weather_object = body.currently;
            const daily_weather = body.daily;

            // console.log(`${daily_weather.data[0].summary} It is currently ${current_weather_object.temperature} degrees out. There is ${current_weather_object.precipProbability}% chance of rain`);
            callback(undefined, `${daily_weather.data[0].summary} It is currently ${current_weather_object.temperature} degrees out. There is ${current_weather_object.precipProbability}% chance of rain`);
        }
    });
}

module.exports = forecast;