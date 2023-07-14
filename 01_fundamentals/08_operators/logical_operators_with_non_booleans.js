// unlike many other programming languages, we can use logical operators with non boolean values.


// Falsy ( false)
// undefined, null, 0, false , '', NaN  -> these are falsy values.


// Anything that is not Falsy is Truthy.

console.log(false || 'Ankit');
console.log(false || 1);
console.log(false || 1 || 2);  // this is short-circuiting 
// As soon as we find an operand that is truthy, that operand is returned.


//practical use case
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);