/*************************************************************
 * Ep36: Creating/Using Seperate Functions with exports
 *************************************************************/

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

/********************************************************************************************************************
 * ep31. Making HTTP Requests to access an API provided by Darksky.net (A weather app)
 * 1. Create an account with Darksky.net and grab your secret API key (This will be use with the url endpoint)
 * 2. Required NPM package installed - request
 * 
 * Ep32. Customizing HTTP Requests
 * 1. Learn how request can 'automatically' parse the JSON for us
 * 2. Use the 'Response' data to print the forecast
 * 3. Explore Options in DarkSky API:
 * - Change Language (English -> French), 
 * - Change Unit (Farenheit -> Celsius)
 ********************************************************************************************************************/

// NOTE: Reference MapBox.com for 'Forward Geocoding' API endpoint & requests "https://docs.mapbox.com/api/search/#forward-geocoding"
// - Summary: An API Endpoint that convert an Address to Lat&Longitude Coordinates and return a response body of JSON
// - GET example: /geocodoing/v5/{endpoint}/{search_text}.json?{access_token}&{limit}
// - API URL: https://https://api.mapbox.com/geocoding/v5/
// - Required Parameter {
// -    Endpoint: /mapbox.places/
// -    search_text: Los%20Angeles.json
// -    ?access_token=pk.eyJ1Ijoic29nZ3ljcm91dG9uIiwiYSI6ImNrMGhuMGswODAyNnozY3A3bTFuOWR3NmsifQ.7YrIM0_X4thlnExHIBxOUA
//   }
// - Optional Parameter { &limit=1 }

/*****************************************************************************
 * Ep33. HTTP Request Challenge:
 * - Implementing another API from mapbox.com
 * 
 * Ep34. Handling API/HTTPS request error
 *****************************************************************************/
// const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic29nZ3ljcm91dG9uIiwiYSI6ImNrMGhuMGswODAyNnozY3A3bTFuOWR3NmsifQ.7YrIM0_X4thlnExHIBxOUA&limit=1'

// request({url: mapBoxURL, json: true}, (error, response) => {
//     if (error) {
//         // console.log(error);
//         console.log('Unable to connect to mapbox API service. (connection issue)');
//     } else if (response.body.features.length === 0) {
//         console.log('Unable to find location, try again with a different search term');
//     } else {
//         const locationName = response.body.features[0].text;
//         const longitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(longitude, latitude);

//         console.log(`Location: ${locationName}`);
//         console.log(`Longitude: ${longitude}`);
//         console.log(`Latitude: ${latitude}`);
//     }
// });

// CHALLENGE: API/Http Request Error Handeling
// Goal: Handle errors for geocoding API request
// 1. Setup an error handler for low-level errors
// 2. Test by disabliong for no matching results
// 3. Setup error handling for no matching results :Hint going to a response body and compare the different in the success response vs. error response (Answer: response.body.features[] is empty user input an incorrect location)
// 4. Test by altering the search term and running the app

const geocode = (address, callback) => {
    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic29nZ3ljcm91dG9uIiwiYSI6ImNrMGhuMGswODAyNnozY3A3bTFuOWR3NmsifQ.7YrIM0_X4thlnExHIBxOUA&limit=1'
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic29nZ3ljcm91dG9uIiwiYSI6ImNrMGhuMGswODAyNnozY3A3bTFuOWR3NmsifQ.7YrIM0_X4thlnExHIBxOUA&limit=1`;

    //NOTE: Destructure the Response by only grabbing the 'body' from the response
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            // NOTE: the callback() expect 2 arguments, (error, data)
            // - One would be defined and the other undefined depending on the response.
            callback('Unable to connect to location services!!!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            });
        }   
    });
}

module.exports = geocode;