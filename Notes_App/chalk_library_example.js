/*************************************************
 * Core Modules - Currently we have none
 *************************************************/

/*****************
 * NPM Packages
 *****************/
// const validator = require("validator");
const chalk = require("chalk");
// const yargs = require("yargs");

/*************************************************
 * Custom Modules - Currently none in use
 *************************************************/
// const get_notes = require("./notes.js");

// const noteMessage = get_notes();
// console.log(noteMessage);

/****************************************************
 * Testing "validator" library/package
 ***************************************************/
// console.log(validator.isURL("https/mead.io"));

/********************************
 * Chalk Library Example
 ********************************/

log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
 
// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));
 
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
 
// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
 
// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));
 
// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
 
// ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);
 
// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

/**************************
 * Define you own theme
 **************************/

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));

/******************************************************
 * Take advantage of console.log string substitution
 ******************************************************/

 const name = "Tyler";
 console.log(chalk.green("Hello %s"), name);


 /*************
  * Chake API
  **************/
 // chalk.<style>[.<style>...](string, [string...]);
 // example:
 log(chalk.red.bold.underline("Hello", "world"));

 log(chalk.red.yellow.green.blue("Stairway to Heaven"));

 log(chalk.bgYellow.gray("Hi my name is, Who my name is..."));

 log(chalk.green("Success!"));
 log(chalk.bold.green("Success!"));

 log(chalk.inverse.yellow.red("what is inverse???"));

 log(chalk.red.inverse.blue("This has been updated by nodemon in the cosole"))
  