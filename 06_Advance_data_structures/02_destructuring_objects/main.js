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
    }
};


// 😊😊 amazing method with multiple arguments
// calling the method - we just passed one argument and that is this object. and then in the method we destructure that objec.
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});


restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1
})



// destructuring the objects

const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);


// mostly used in api calls 

// giving new variable name to destructured objects.
const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName,hours,tags);


// setting default values
const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);


// mutating variables like switching arrays using destructring
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};

({a,b} = obj);
// console.log(a,b);


// nested objects destructuring
const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);



// really cool aplication of destructring objects
