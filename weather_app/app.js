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
geocode('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});

/**************************************************************
 * Ep37: Callback Abstraction Challenge
 * - Implement creating a seperate functions for Dark Sky API
 **************************************************************/

// Example/Test Sample Call
forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
});