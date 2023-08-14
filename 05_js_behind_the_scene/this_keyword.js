'use strict';


// console.log(this); // window object


const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log(this); // undefined
}



// the arrow funciton does not gets it own this keyword, it uses the this keyword of its parent scope and this is called lexical this keyword
const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this); // window object
}

const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(this); // jonas object
        console.log(2037 - this.year);
    }
}

jonas.calcAge();


const matilda = {
    year: 2017
}


// method borrowing
matilda.calcAge = jonas.calcAge; // copying the mehtod but not calling it
console.log(matilda);


// regular function call
const f = jonas.calcAge;
f(); // undefined