let x = 20;
let y = x;

x = 30;

console.log(y); // 20 because x is a primitive type and y is a copy of x


// but that is not the case with objects

let x1 = {value: 20};
let y1 = x1;

x1.value = 30;

console.log(y1); // 30 because x1 is a reference type and y1 is a reference to x1


// Primitives are copied by their value while objects are copied by their reference