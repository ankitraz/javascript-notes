'use strict';

const arr = [2,3,4];


// destructring an array
const [x,y,z] = arr; // its not an array. these are the variables.

// console.log(z,y,z);
// however the original array is not affected.


const restaurant = {
    name: 'Classico Italiano',
    location: 'via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Italian', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    order: function(startedIndex, mainIndex){
        return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
    }
}

// destructuring the array from the objets
const  [first,second] = restaurant.categories;
// console.log(first, second);
const  [first1, ,third] = restaurant.categories;
// console.log(first1, third);


let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// switching the variables using destructring
[main, secondary] = [secondary, main]
// console.log(main, secondary); // Bruschetta Italian

console.log(restaurant.order(2,0)); //[ 'Garlic Bread', 'Pizza' ]

const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);


// nested destructring
const nested = [2,4,[5,6]];
// const [i, ,k] = nested;
// console.log(i,k);

// destructure the array inside the array
const [i, ,[k,l]] = nested
console.log(i,k,l);


// default values
const [p=1,q=1,r=1] =  [8,9]
console.log(p,q,r);


// reversing the values of a and b.
let a = 56;
let b = 34;


[a,b] = [b,a];
console.log(`a = ${a}, b = ${b}`);