// Asynchronous Node.js (Weather App)

// ep31. Making HTTP Requests to access an API provided by Darksky.net (A weather app)
// 1. Create an account with Darksky.net and grab your secret API key (This will be use with the url endpoint)
// 2. Required NPM package installed - request
// 3. 

// ep32. Customizing HTTP Requests
// 1. Learn how request can 'automatically' parse the JSON for us
// 2. Use the 'Response' data to print the forecast
// 3. Explore Options in DarkSky API:
//  - Change Language (English -> French), 
//  - Change Unit (Farenheit -> Celsius)


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

 // NOTE: Reference Dark Sky API for 'Forecast Request' 
 //     - Request Parameter/Query String within the URL
const url = 'https://api.darksky.net/forecast/e06aa10d90db16967f763aa7780de9a5/37.8267,-122.4233?lang=es'

// Goal: Print a small forcast to the user
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."

// NOTE: the request() function takes in 2 argv
// - Option Object (reference DarkSky Documentation)
// - Function: This is the function takes in 2 argv (error, response) to run when we get a response back
request({ url: url, json: true }, (error, response) => {
    // console.log(response);
    // const data = JSON.parse(response.body);
    // console.log(data.currently);
    // console.log(response.body.currently);
    const current_weather_object = response.body.currently;
    const daily_weather = response.body.daily;

    console.log(`${daily_weather.data[0].summary} It is currently ${current_weather_object.temperature} degrees out. There is ${current_weather_object.precipProbability}% chance of rain`);
});


