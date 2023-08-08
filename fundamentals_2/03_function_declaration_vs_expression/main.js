
// function declaration
function calAge1(birthYear) {
    const age = 2023 -birthYear;
    return age
}


// function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear
}


// both are same just a ways to write function.

console.log(calAge1(2002));
console.log(calcAge2(2002));

// arguments - these are the actual value which gets passed to the function.

// parameter - kind of placeholder in the function