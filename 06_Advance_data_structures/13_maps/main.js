'use strict';

// we know that in objects we can only use string as the key value of the properties, but in maps, we can use any data type as key.


const rest = new Map();
rest.set('name','meow restaurant');
rest.set(1, 'Chandigarh, India');
// console.log(rest.set(2, 'value 2'));
rest.set(2, 'value 2')

// chaining the set method of map
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(')

// retrieving values
// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// use case
const time = 24;


// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// methods for maps
// console.log(rest.has('categories'));
rest.delete(2);

// console.log(rest.size);
// rest.clear(); // remove all the element from  amap
// console.log(rest); 


// we can also use arrays as map keys
const arr = [1,2]

// rest.set([1,2], 'Test')
rest.set(arr, 'Test')
// console.log(rest);

// now how can we retireve the data having an array as a key?
// console.log(rest.get([1,2])); // undefined -> because theese are not the same array as in the map. in order to make it work, we need to assin that array in a variable first
console.log(rest.get(arr));



// using queryseelctor as key in map lol😂
rest.set(document.querySelector('h1'), 'Heading')

console.log(rest); // this will show output in browerser console