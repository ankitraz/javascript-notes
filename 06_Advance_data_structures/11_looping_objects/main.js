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

// properties names
const properties = Object.keys(restaurant.openingHours);
// console.log(properties);



let openStr = `we are open on ${properties.length} days.`;


for (const day of properties) {
    openStr+= ` ${day}, `
}

// console.log(openStr);


// property values
const values = Object.values(restaurant.openingHours)
// console.log(values);

// Entire object
const entries = Object.entries(restaurant.openingHours)
// console.log(entries);


for (const [key, {open,close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`);
}