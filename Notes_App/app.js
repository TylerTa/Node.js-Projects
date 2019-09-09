/*******************
 * Core Modules
 *******************/

/******************
 * NPM Packages
 ******************/
// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");

/******************
 * Custom Modules
 ******************/
const notes = require("./notes.js");

// console.log(validator.isURL("https/mead.io"));

/**************************************************
 * File System and Command Line Args (Notes App)
 **************************************************/

// We can assign the console.log method to a variable to type it out easier for later use
log = console.log;

// Customize yargs version
yargs.version("1.1.0");

/*********************************************
 * Original Code ES5 Syntax
 *********************************************/

// Create add command using yargs
yargs.command({
    command: "add",                                         // The command
    describe: "Add a new note",                             // Command Descriptions (meta data)
    builder: {                                              
        title: {
            describe: "Note title",
            demandOption: true,                             // demandOption: set if an argument is required
            type: "string"                                  // To enforce that the argument sent in is a "string" value
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },                             
    handler: function (argv) {                              // handler is actually what will run/execute a function when the command is called
        // log(chalk.greenBright("Adding a new note!", argv));
        // console.log("Adding a new note!", argv);
        // console.log("Title: " + argv.title);
        // console.log("Body: " + argv.body);
        notes.addNote(argv.title, argv.body);
    }
});

// Remove Notes Challenge - Udemy Episode 20: Setup command option and function
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a removeNote function from notes.js
// 3. Call removeNote in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// Create remove command
yargs.command({
    command: "remove",
    describe: "Removing a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        log(chalk.redBright("Attempting to remove a note!"));
        notes.removeNote(argv.title);
    }
});

// Create list command
// Have not been wired up set up to use functions from notes.js
yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler: function () {
        log(chalk.yellowBright("Listing all notes!"));
    }
});

// Create read command
// Have not been wired up set up to use functions from notes.js
yargs.command({
    command: "read",
    describe: "Read/Get a note",
    handler: function() {
        log(chalk.magentaBright("Reading/Retrieving a note!"));
    }
});

// log(yargs.argv);

yargs.parse();

