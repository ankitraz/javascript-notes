'use strict';


// or operator use any data type, return any data type, short-circuiting
console.log(1 || 'Jonas'); //in the or operator if the first value is the truthy value it will immediatly return the value this is called short circuiting.
console.log('' || 'Jonas'); //in the or operator if the first value is the truthy value it will immediatly return the value this is called short circuiting.
console.log(true || 0);
console.log(undefined || null); // 😂 ab bol // both are falsy, so null is returned.



console.log(undefined || 0 || '' || 'Hello' || 23 || null); // hello =  this is the first truthy value so it will be returned.



// practical application of short circuiting.

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
    },

    // using rest 
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient, otherIngredients);
    }
};

restaurant.numGuests = 23; // both the solution will not work if the numguest is 0.😂 problem
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);


// instead of doing above , we can use short circuiting here
const guest2 = restaurant.numGuests || 10;
console.log(guest2);


console.log('-------------AND----------------');
console.log(0 && 'Jonas'); // works in opposite way of OR
console.log(7 && 'Jonas');


console.log('Hello' && 23 && null && 'Jonas'); // null


// practical example of and
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach')
}

// anoother way
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach')