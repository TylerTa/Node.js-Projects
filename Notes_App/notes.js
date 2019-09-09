const fs = require('fs');
const chalk = require("chalk");

const addNote = (title, body) => {
    const notes = loadNotes();

    // Note: .filter() iterate through the "whole" array even if a duplicate was already found. 
    const duplicateNotes = notes.filter((note) => note.title === title);
    
    // Note: .find() iterate through an array and stop after it found a match/duplicate note.title
    // - This will return an 'undefinded' if nothing/no title match was found
    const duplicateNote =  notes.find((note) => note.title === title);

    debugger

    // Note: duplicateNote return true if it found a match, so we use the logical "NOT Operator" going into the function when duplicatNotes is 'false' or 'undefinded'
    if (!duplicateNote) {
        //Pushing an 'Object' onto the array of notes.
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);

        console.log(chalk.green.inverse('New note added!'));

        // console.log('This is what notes looks like after you push another "Object" into the "notes[]""');
        // console.log(notes);
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }

};

/**
 * 
 * @param {*} title - string
 * 
 * 1. Load existing notes
 * 2. Use array filter method to remove the matching note (if any) - We want to keep all of the none matching title
 * 3. Save the newly created array - use the existing saveNotes() function
 * 4. Test you work with a title that exists and a title that doesn't exist
 */
const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notesToKeep.length !== notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.greenBright.inverse("Note removed!"));
    } else {
        console.log(chalk.redBright.inverse("No note found!"));
    }
};

const listNotes = () => {
    const arraylist_notes = loadNotes();

    console.log(chalk.inverse("Your notes..."));

    arraylist_notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const arrayList_notes = loadNotes();

    const note_found = arrayList_notes.find((note) => note.title === title);

    if (note_found) {
        console.log(chalk.inverse.green(`Title: ${note_found.title}`));
        console.log(`Body: ${note_found.body}`);
    }else {
        console.log(chalk.inverse.red(`Error, could not find note with title: ${title}`));
    }

}

/**
 * @saveNotes 
 * @param {*} notes - an Array Object of notes
 */
const saveNotes = (notes) => {
    // 1. Use JSON.stringify to convert the JSON Object => String
    const dataJSON = JSON.stringify(notes);

    // 2. Save the note onto a file
    //    NOTE: This actually also overwrite a file
    fs.writeFileSync('notes.json', dataJSON);
}

/**
 * Return: - An Array[] of notes 
 *         - or an EMPTY Array [] if there was no JSON file to read
 * Notes: If failed the return empty [] is used in addNotes() to create the file
 */
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return []
    }    
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}