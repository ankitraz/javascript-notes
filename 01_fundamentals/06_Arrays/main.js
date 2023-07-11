let selectedColors = ['red', 'blue']; // array literal
selectedColors[2] = 'green';
console.log(selectedColors);
// length of array is dynamic, it can be changed at runtime
console.log(selectedColors[2]);

// we can also store different types of values in an array
selectedColors[3] = 1;

console.log(selectedColors);

console.log(selectedColors.length); // returns no of items in array

// array is a data structure used to represent a list of items