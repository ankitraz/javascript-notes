'use strict';

const weekdays = ['Mon','tue', 'wed', 'thu','fri','sat','sun']



const openingHours = {
    [weekdays[3]]:{
        open: 12,
        close: 22
    },
    [weekdays[5]]:{
        open: 11,
        close: 23
    },
    [`day-${2+4}`]: {
        open: 0,
        close: 24
    }
};


// object literal - because we write object literally
const restaurant = {
    name: 'Classico Italiano',
    location: 'via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Italian', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours: openingHours,
    //es6 enhanced object literlas
    openingHours,

    order (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        // now we have four variable right away from the object
        console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    // spread operator real life example

    orderPasta(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    // using rest 
    orderPizza(mainIngredient, ...otherIngredients){
        console.log(mainIngredient, otherIngredients);
    }
};



// es6 3 ways to creawte object literals
console.log(openingHours);

