'use strict';

const airline = 'AIR india';
const plane = 'A320'

console.log(plane[0]); //A
console.log(plane[1]); //3
console.log(plane[2]); // 2
console.log('B737'[0]); // B


console.log(airline.length); //9

// methods in strings
console.log(airline.indexOf('R')); // 2
console.log(airline.lastIndexOf('i')); //7

console.log(airline.indexOf('ind')); // 4  // this will return the first occurence of the give string or character.

// console.log(airline.slice(4)); // india - this is called substring - itdo not modify existing string.
console.log(airline.slice(4,7)); //ind // length of the extrcted array is always end-beginning . in this case it is 7 - 4 = 3

console.log(airline.slice(0, airline.indexOf(' '))); // AIR
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // india


console.log(airline.slice(-2)); //ia
console.log(airline.slice(1,-1)); //IR indi



const checkMiddleSeat = function(seat){
    // B and E are middle seats
    const s = seat.slice(-1)
    if (s === 'B' || s === 'E') {
        console.log('You got the middle seat😒');
    } else {
        console.log('You got lucky😊');
    }
}

checkMiddleSeat('11B'); //You got the middle seat😒
checkMiddleSeat('23C'); //You got lucky😊
checkMiddleSeat('3E'); //You got the middle seat😒


// we know that string are just primitives, so why they have methods, ( we have only heard about thea method belongs to objects)
// javascipt is really smart, when we call any method on string, js will automatically convert string primitve to string object, and then it's on the that object where the methods are called.
// this process is called boxing.
console.log(new String('ankit')); // js do this conversion behind the scene when we call any method,
// and after that, string object is converted back to a regular string primitive. all the string method returns primitives even if called on a string object.
console.log( typeof new String('ankit').slice(1)); //string