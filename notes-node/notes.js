
console.log('Starting notes.js');

// console.log(module);

module.exports.age = 31;

// console.log(module);


module.exports.addNote = () => {
    console.log('Adding a note!');
    return 'New note';
};


module.exports.add = (a, b) => {
    return a + b;
}
