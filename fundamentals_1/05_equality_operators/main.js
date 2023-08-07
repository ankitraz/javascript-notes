const age = 18;

if (age === 18){
    console.log('You just became an adult :D');
}

// double equal - loose equality - actaully does type coercion.
console.log(18 == '18'); // double equal type coerse the value at left side.
console.log(18 == 18); // ture



// triple equal - strict equality. - it does not perform type coercion.
console.log(18 === 19); // false
console.log('18' === 18); // false



// getting value from webpage


// const favourite = prompt("What's your favourite number?")
// console.log(favourite);
// console.log(typeof favourite); // it a string type

// if (favourite == 23) { // '23' == 23 // if we use === then this block will not get exeucted.
//     console.log('Cool! 23 is an amazing number!');
// } 

// we should not use == , always use ===
// to fix above logic in order to use ===
const favourite = Number(prompt("What's your favourite number?")) // now we type convert the input value to an int, and then we can easily compare it using ===

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if(favourite === 7){
    console.log('7 is also a cool number.');
} else if(favourite === 9){
    console.log('9 is also a cool number.');
} else {
    console.log('Number is not 23 or 7');
}

if(favourite !== 23){
    console.log('Why not 23?');
}

// always make sure to use strict equality operator.


