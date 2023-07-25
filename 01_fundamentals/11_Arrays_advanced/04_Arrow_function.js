const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
]

const course = courses.find(course => course.name === 'a');


console.log(course);

console.log(course.name)

console.log(course.name)

console.log(course)


// other example

let message = () => {
    return `hello world`
}


// let numbers = [1,4,5,6,0,9];

// let max = (numbers) => {
//     let result = numbers[0];
//     for (const number of numbers) {
//         if (number > result) {
//             result = number;
//         }
//     }
//     return result;
// }

// console.log(max);

const sum = (numbers) => {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

const numbers = [1, 2, 3, 4, 5];
const result = sum(numbers);
console.log(result);