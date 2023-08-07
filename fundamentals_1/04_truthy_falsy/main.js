// 5 falsy values - 0,'', undefined, null , NaN, false - these are the values which become false when we try to convert them into boolean.
// all other values than these are truthy values.  -  they become true when we/js tries to convert into boolean.

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Ankit'));
console.log(Boolean({}));

// the conversion to boolean is always implicit, not explicit.


// type coercion of boolean

const money = null; // falsy -- will get automatically coerce by js to false.
if (money) { // using variables in conditionals.
    console.log("Don't spend it all ;");
} else {
    console.log('You should get a job.');
}



// use case of truthy or falsy - to check if a variable is actually defined or not.

let height = 0; // by default value of this variable is undefined. so it will become falsy.and gets converted to false when javascript do the coercion stuff.
console.log(height);
if (height || height == 0) {
    console.log('YAY!, Height is defined');
} else {
    console.log('Height is UNDEFINED');
}