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



// creating maps using other syntax other that
const question = new Map([
    ['question','What is the best programming language in the world?'],
    [1, 'C++'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['Correct', 3],
    [true, 'Correct👍'],
    [false, 'Try again 🤞']
])

// console.log(question);

// convert object to map
const hoursMap = new Map(Object.entries(restaurant.openingHours))
// console.log(hoursMap);


// iteration on maps -  maps are also iterables.



// quiz app
console.log(question.get('question'));
for (const [key,value] of question) {  // objects are not iterable hence we need .entries() method. but in the case of map, we do notneedthat
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

// const answer = Number(prompt('Your answer'));
// console.log(answer);


// console.log(question.get(answer === question.get('Correct')));


// convert map to array
console.log([...question]);