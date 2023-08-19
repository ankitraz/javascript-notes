'use strict';

const airline = 'AIR india';
// const plane = 'A320'

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('Ankit'.toLowerCase());

// Fix captitalization in name
const passenger = 'jOnAS';  // should be Jonas

const passengerLower = passenger.toLowerCase();
// now we need to fix the first letter.
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // Jonas



//Creating a function that inputs any passenger name and returns the correct name
const fixName = function(string){
    const stringLower = string.toLowerCase();
    return stringLower[0].toUpperCase() + stringLower.slice(1);
}

console.log(fixName('AnKIt'));


// comparing email
const email = 'hello@jonas.io'
const loginEmail = ' Hello@Jonas.Io \n' // fixing this.


// firstconvert it to lowercase
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();


// doing all in one steep
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail);

console.log(email === normalizedEmail); // true


// replacing a part of a string
const priceGB = '28,97€';
const priceUS = priceGB.replace('€','$').replace(',','.'); // chaining string methods. note that string methods returns string so we can use them for chaining
console.log(priceUS);

// replacing entire word
const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replace('door','gate')); // this only replaces the first occurence of door. // however 
console.log(announcement.replaceAll('door','gate'));  // so replaceAll is working as well. It is used to replace all the occurence of the given search string.🤞🤞



// other solution for replaceAll - use of regular expressioon - regex
console.log(announcement.replace(/door/g,'gate'));  // 'g' stands for global



// boolean retruning methods
const plane = 'Airbus A320neo'
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));  // very used method // you can also check for a single letter as well.
console.log(plane.endsWith('eo'));


// taking decision on the basis of string
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW Airbus family.');
}


// practice exercise
const checkBaggage = function (items) {
    // first put everythin to lowercase. it is easier to do stuff
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed to board');
    } else {
        console.log('Welcome aboard!');
    }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')
