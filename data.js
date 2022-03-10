const fs = require('fs');       // importing fs module in the file 

// Adding a note
const addNote = (title, body) => {      // this will take title and body input by the user as its parameters
    const notes = loadNotes();        // this will store the converted input array of objects of previous inputs by the user
    
    // const duplicateNotes = notes.filter(function (note) {        // this will store all the duplicate notes, this will check for no more notes with same titles
    //     return (note.title === title);         // comparing new title with the already stored title in the nmotes.json file
    // });                 // this will run for those many time till the title of all the objects in the notes.json file has been compared with the new input title

    // const duplicateNotes = notes.filter((note) =>  note.title === title );  // using short hand arrow function

    // if(duplicateNotes.length === 0) {
    //     notes.push({          // this will append the new input by the user in the array of objects
    //         title: title,        // defining the new object in the array with body property input by the user
    //         body: body           // defining the new object in the array with title property input by the user
    //     })      // we r pushing an object
    
    //     saveNotes(notes);         // this will convert the data into string and overwrite it on the notes.json file
    
    //     console.log(chalk.green.inverse('New note added!'));
    //     // console.log(notes);
    // } else {
    //     console.log(chalk.red.inverse('Note title taken!'));
    // }
    
    const duplicateNote = notes.find((note) => note.title === title);    // this will find the match and stop searching ahead
    // finder will not stop searching even after finding the match

    // debugger;       // check the link: https://nodejs.org/en/docs/inspector 
    // U can use this link: chrome://inspect on chrome

    if(!(duplicateNote)) {    // or we cld do 'duplicateNote === undefined'
        notes.push({         
            title: title,       
            body: body         
        })     
        console.log(notes);
        saveNotes(notes);         
    
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

// Removing a note
const removeNote = (title) => {
    const notes = loadNotes();    // this will load all the notes in the file 'notes.json'

    const noteToKeep = notes.filter((note) =>  note.title != title );  // using short hand arrow function

    if(notes.length > noteToKeep.length) {        // this will check whether the title to be removed is there in the file or not
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(noteToKeep);                   // this will save the new array of objects of the notes after removing the the note with that title to be removed
    } else {
        console.log(chalk.red.inverse('No note found!'));       // since the note with that title was not found, it is not required to save notes
    }
}

// Listing notes
const listNotes = () => {
    console.log(chalk.blue.bold('Your notes'));

    const notes = loadNotes();        // this will load all the notes from the file

    notes.forEach((note) => {          // we apply forEach to array of objects
        console.log(note.title);     // this will console all the titles of the notes
    });
}

// Reading notes
const readNotes = (title) => {
    const notes = loadNotes();     // this will load all the notes from the file

    const readNote = notes.find((note => note.title === title));   // this will find the note with the title passed and store it in the variable

    if(readNote) {     // if there is the note with that title to read it will print its title and body
        console.log(chalk.inverse(readNote.title));
        console.log(readNote.body);
    } else {     // if not found it will print error
        console.log(chalk.red.inverse('Note not found!'));  
    }
}

// Saving notes to the file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON); // this will overwrite on the previous data
}

// Loading notes from the file
const loadNotes = () => {       /* it is called a try and catch statement. Basically The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block. */
    try {                      // so basically we made a try and catch block where if we get an error in try block it will stop and execute the catch block immediately
        const dataBuffer = fs.readFileSync('data/data.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);      // this will input the data stored in the file in notes.json,      (Why r we doing it? we r doing this coz everytime a new input is given by the user we need to store the previous data in the notes.json file and then append thre new input data and overwrite over the previous data in the notes.json file)
    } catch (e) {
        return [];        // it will return [], whenever there is an error in the try method
    }
}         // this stores the previous data as an array of objects

// Exporting contents from notes.js to app.js
module.exports = {          // we create an object with functions
    loadNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}           // we will export an object, with two properties one forEach function which means both of them get exported and both be used by another file - 'app.js'