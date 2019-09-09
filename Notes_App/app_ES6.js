/*******************
 * Core Modules
 *******************/

/******************
 * NPM Packages
 ******************/
const validator = require("validator");
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

/*****************************************
 * Refactored Code with ES6 Syntax
 *****************************************/

 // yargs: Add command 
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
    handler(argv) {                                         // handler is actually what will run/execute a function when the command is called
        // log(chalk.greenBright("Adding a new note!", argv));
        // console.log("Adding a new note!", argv);
        // console.log("Title: " + argv.title);
        // console.log("Body: " + argv.body);
        notes.addNote(argv.title, argv.body);
    }
});

// yargs: Remove/Delete command
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
    handler(argv) {
        log(chalk.redBright("Attempting to remove a note!"));
        notes.removeNote(argv.title);
    }
});

// yargs: Create read command
// 1. Setup --title option for read command
// 2. Create readNote in notes.js
//  - Search for note by title
//  - Find note and print title (styled) and body (plain)
//  - No note found? Print error in red.
// 3. Have the command handler call the function
// 4. Test your work by running a couple commands
yargs.command({
    command: "readNote",
    describe: "Read/Get a note",
    builder: {
        title: {
            describe: "Note Title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function(argv) {
        log(chalk.magentaBright("Attemping to read/retrieve a note!"));
        notes.readNote(argv.title);
    }
});

// Get list of all notes command
// 1. Create and export listNotes from notes.js
//  - "You notes" using chalk
//  - Print note title for each note
// 2. Call listNotes from the command handler
// 3. Test your work!
yargs.command({
    command: "listNotes",
    describe: "List all notes",
    handler() {
        notes.listNotes();
    }
});

yargs.parse();