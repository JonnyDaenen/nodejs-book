
console.log('Hello World!');

console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');



// fs.appendFile('greetings.txt', 'Hello World!', function (err) {
//     console.log('done with the append call, let me see if there is an error');
//     if (err){
//         console.log('There was an error!');
//     } else {
//         console.log('There was no error :)');
//     }
// });


// fs.appendFileSync('greetings.txt', 'Hello sync world!');


var info = os.userInfo();
// console.log(info);
// var name = info['username'];
// console.log("Hello, " + name + "!");
// console.log("Hello, " + info.username + "!");
// console.log(`Hello, ${info.username}!`);


// console.log(notes);
// console.log(module);


fs.appendFile('greetings.txt', `Hello, ${info.username} is ${notes.age}\n`, function (err) {
    if (err){
        console.log('There was an error!');
    }
});


var result = notes.addNote();
console.log(result);

console.log(notes.add(9,-2));

// lodash usage
console.log(_.isString(true));
console.log(_.isString('Gary'));

listOfThings = ['Jonny', 1, 3, 'Jo
nny', 3, 5, 1];
filteredList = _.uniq(listOfThings);
console.log(filteredList);
