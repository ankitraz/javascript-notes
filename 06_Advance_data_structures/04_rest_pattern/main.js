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
    },

    // using rest 
    orderPizza: function(mainIngredient, ...otherIngredients){
        console.log(mainIngredient, otherIngredients);
    }
};




// spread, becaue on right side of =
const arr = [1,2,, ...[3,4]]

// rest, beause on left side of =
const [a,b, ...others] = [1,2,3,4,5]

console.log(a,b,others);


//destructruing and rest pattern
const [pizza, ,risotto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, othersFood);


// objects
const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays);


//use with functions to accept any no of parameterss
const add = function(...numbers){ // rest parameter in modern javascript
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
         sum += numbers[i];
    }
    console.log(sum);
}

add(2,3)
add(5,3,7,2)
add(8,2,5,4,2,1)

const x = [23,5,7];
add(...x) // spreading



// using with restaurant obje
restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')