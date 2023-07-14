
// performing a task
function greet (name, lastName){   // name is the parameter here
    console.log('Hello ' + name + ' ' + lastName);  // function body
}


greet('Ankit', 'raj'); // function call  // 'Ankit' is the argument here

// diffrence b/w parameter and argument
// parameter is the variable in the declaration of function.
// argument is the actual value of this variable that gets passed to function.

// Types of functions
// 1. performing a task
// 2. calculating a value


// calculating a value
function square(number){
    return number * number;
}

let number = square(2);
console.log(number);

// or
console.log(square(2));