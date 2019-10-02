// Title: Asynchronous Node.js (Weather App)

/*******************
 * Core Modules
 *******************/

/******************
 * NPM Packages
 ******************/
// const request = require('request');

/******************
 * Custom Modules
 ******************/
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

/************************************************************************
 * Ep36: Creating/Using Seperate Functions for "Mapbox API" with exports
 ************************************************************************/
// NOTE: When working with "Callback Function & Callback Pattern", it's typical to see two arguments passed to "Callback" (error, data)
// geocode('Boston', (error, data) => {
//     console.log('Error', error);
//     console.log('Data', data);
// });

/**************************************************************
 * Ep37: Callback Abstraction Challenge
 * - Implement creating a seperate functions for Dark Sky API
 **************************************************************/

// Example/Test Sample Call
// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// });

/**************************************************************************************************************************************************************
 * Ep38: Callback Chaining: Chaining together multiple callback, to do multiple things in a specific order
 * - You can chain multiple Async I/O operation to perform one Async Function before the other (kinda like Synchronous step but within Asynchronous Function)
 **************************************************************************************************************************************************************/

 // Goal: Accept location via command line argument
 // 1. Access the command line argument with yargs (Hint: Use the standard functionality "process" - console.log(process.argv) with the commandline => node app.js Boston);
 // 2. Use the string value as the input for geocode
 // 3. Only geocode if a location was provided
 // 3. Test your work with a couple of locations

 /**
  * Ep40: Destructuring and Property Shorthand Challenge
  * Goal: Use both destructuring and property shorthand in weather app
  * 1. Use destructuring in app.js, forecast.js, and geocode.js
  * 2. Use property shorthand in forecast.js and geocode.js
  * 3. Test your work and ensure app still works
  */

//  console.log(process.argv);
 const address = process.argv[2];

if (!address) {
    console.log('Please provide an address');
} else {
    geocode(address, (error, {longitude, latitude, location}) => {

        // NOTE: For error handeling you can wrap it in a conditional statement to execute only if error is not true
        // - But because we use a 'return' statement in the within the 'if conditional' statement, 
        // - it will stop the function execution after console.log(error);
        if(error) {
            return console.log(error)
        } 
    
        // Example/Test Sample Call
        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            } 
        
            // This is where we put the code that runs if both request works
            // - If error did not return for geocode() or forecast() 
            // - Then process the final result
            //    Goal: Print the location property from geocode() and print the forecast from forecast();
            console.log(location);
            console.log(forecastData);
        });
    });
}

