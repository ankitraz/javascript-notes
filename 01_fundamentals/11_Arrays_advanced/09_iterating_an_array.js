const numbers = [1,2,3]

for (const number of numbers) {
    console.log(number);
}

numbers.forEach(function(number){  // this funtion will be called for the each element in the array.
    console.log(number);
})

// we can use the arrow function syntax to simplify above code

numbers.forEach((number) => {
    console.log(number);
})