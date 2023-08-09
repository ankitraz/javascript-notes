const age = 13;
age >= 18 ? console.log('I like to drink wine🍷') : 
console.log('I like to drink water💧');

const drink = age >= 18 ? 'wine🍷': 'water💧'  // assiging variable based on conditions.
console.log(drink);


// above code is same is this but that one is more concise and clear.
let drink2;
if (age>=18) {
    drink2 = 'wine🍷'
} else {
    drink2 = 'water💧'
}

console.log(drink2);


// we can also use ternary operator in template literal
console.log(`I like to drink ${age >= 18 ? 'wine🍷': 'water💧'}`);