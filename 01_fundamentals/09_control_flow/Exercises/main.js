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

// const output = fizzBuzz();
// console.log(output);


//
// speed limit = 70;


function checkSpeed(speed) {

    if (speed <= 70 + 5) {
        return 'Ok';
    }

    let points = Math.floor((speed - 70) / 5);

    if (points > 12) {
        return 'License suspended.'
    }

    return points;
}

// console.log(checkSpeed(76));


// 

function showNumbers(limit) {
    for (let i = 0; i < limit; i++){
        if (i % 2 === 0) {
            console.log(i + ' "Even"');
        } else {
            console.log(i + ' "ODD"');
        }
    }
}

// showNumbers(10);


// find truthy in an array
//undefined, null, 0, false , '', NaN

arr = [ '',"Ankit", NaN, 0];

function countTruthy(array) {
    let count = 0;
    for (let element of array) {
        if (element) {
            count++;
        }
    } 
    return count;
}

let ans = countTruthy(arr);
// console.log(ans);

// string properties exercise 

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(movie) {
    for (const key in movie) {
        if(typeof(movie[key]) === 'string'){
            console.log(key + " " + movie[key]);
        }
    }
}

// showProperties(movie);

// sum of multipless of 3 and 5


function sum(limit) {
    let ans = 0;

    for(let i = 0; i <= limit; i++){
        if(i % 3 === 0 || i % 5 === 0){
            ans += i;
        }
    }
    return ans;
}

// console.log(sum(10));


// grade
function calculateGrade(marks) {
    
    const avg = calculateAvg(marks);
    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';

}
 
function calculateAvg(array) {
    let totalmarks = 0;
    for (const iterator of marks) {
        totalmarks += iterator;
    }
    let avg = totalmarks / marks.length;
    return avg;
}


const marks = [80,80,50];
// console.log(calculateGrade(marks));


// stars exercise 
function showStars(rows) {
    for (let i = 0; i <= rows; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}
// showStars(5);


// prime numbers

function showPrimes(limit) {
    for (let i = 0; i < limit; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                console.log(i);
            }
        }
    }
}

showPrimes(20);