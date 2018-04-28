
console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log('Adding a note', title, body);
    return 'New note';
};


var getNote = (title) => {
    console.log('Reading note with title', title);
};


var getAll = () => {
    console.log('Getting all notes');
};

var removeNote = (title) => {
    console.log('Removing note with title', title);
};


module.exports = {
    addNote : addNote,
    getAll,
    getNote,
    removeNote,
};
