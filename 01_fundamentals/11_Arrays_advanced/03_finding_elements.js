const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'}
]

// const course = courses.find(function(course) {
//      return course.name === 'a';
// })

// console.log(course);


let numbers = [1,4,3,2,3]

const result = numbers.find(function(number){
    return number === 2
})

// console.log(result);


// arrow function

const course = courses.find(course => course.name === 'a')

console.log(course);

