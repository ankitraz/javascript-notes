'use strict';


const rest1 = {
    name: 'Capri',
    // numGuest: 20
    numGuest: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner : 'Meow'
};


// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// logical assignment
// rest1.numGuest ||= 10; // same as line 15
// rest2.numGuest ||= 10; // same as line 16


// fixing when numguest is 0
// rest1.numGuest ??= 10; 
// rest2.numGuest ??= 10; 


// rest1.owner = rest1.owner && '<ANONYMOUS';
// rest2.owner = rest2.owner && '<ANONYMOUS';

// and assignment operator1
// rest1.owner &&= '<ANONYMOUS'
// rest2.owner &&= '<ANONYMOUS'

console.log('hello world')


console.log(rest1);
console.log(rest2);