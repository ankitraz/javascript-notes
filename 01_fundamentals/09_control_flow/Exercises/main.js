// write a function tha takes two numbers and returns the maximum of the two.

function maxOfTwo(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     }
//     return num2;

    return (num1 > num2)? num1 : num2;
}

// console.log(maxOfTwo(6,6));

// write a function that returns true if the image is landscape ( width > height) else false.
function isLandscape (width, height){
    // return (width > height)? 'Landscape': 'portrait';
    //good code
    return (width > height);
}

// console.log(isLandscape(450, 730));






//fizz buzz ( famous interview question)
function fizzBuzz(input){
    let ans = undefined;

    if (typeof(input) !== 'number') {
        return NaN;
    }

    if (input % 3 === 0) {
        if ( input % 5 === 0){
            return 'fizzBuzz';
        }
        return 'fizz';
    }
    
    if (input % 5 === 0) {
        return 'Buzz';
    }

    return input;
}

const output = fizzBuzz();
console.log(output);