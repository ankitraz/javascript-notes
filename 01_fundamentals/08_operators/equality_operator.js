// strict equality ( Same type + value)
console.log(1===1);
console.log('1'===1);

// lose euqlity (doesn't care about types matching)
console.log('1'== 1); // this operator looks at the value on the left side. it will automatically convert right side to a string and then compares it.
console.log(1==1);
console.log(true == 1);