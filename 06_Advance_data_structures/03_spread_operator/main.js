'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Italian', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu:{
            open: 12,
            close: 22
        },
        fri:{
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 24
        }
    },


    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        // now we have four variable right away from the object
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    // spread operator real life example

    orderPasta: function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    }
};


// unpacking the all the array elements at once

const arr = [7,8,9];

// bad approach
// const badNewArr = [1,2,arr[0],arr[1], arr[2]]
// console.log(badNewArr);


// good approach
const newArr = [1,2, ...arr];
// console.log(newArr);

// console.log(...newArr); // same as writting log(1,2,7,8,9)


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);


// difference b/w destructuring and spread operator
// the spread operator takes all the elements from the array and it also doesn't create new variables.



// copy array
const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy of the array


// join 2 arrays or more
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu);


//spread operators works on all iterables - arrays, strings, maps, sets but not objects.

// using spread operators on strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.']
console.log(letters);
console.log(...str); // we will get all the individual element.
// we cannot use it with template literals




// real life example
// const ingredients = [prompt(`Let's make pasta! ingredient 1?`),prompt(`Let's make pasta! ingredient 2?`),prompt(`Let's make pasta! ingredient 3?`)];
// console.log(ingredients); 

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])// instead of doing this we can use spread operator
// restaurant.orderPasta(...ingredients);



// after es8 spread operator also works on objects 😂 even though they are not iterables/
const newRestaurant = {foundedIn: 1998, ...restaurant, fouder: 'Ankit'}
console.log(newRestaurant);


const restaurantCopy = {...restaurant} // shallow copy of original object
restaurantCopy.name = 'Meow restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name);