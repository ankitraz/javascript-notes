let numbers = [1,2,3,4]
let another = numbers

// removes all the element in an array


//solution 1 -- > assing it to new array, but this method won't work with const, we need to convert it to let
// numbers = []
// console.log(another)
// console.log(numbers)


// solution 2 --> simply set the lenght to zero
// numbers.length = 0
// console.log(numbers);
// console.log(another);


// solution3 -- > using splice method
// numbers.splice(0, numbers.length)
// console.log(numbers);


// solution4 =--> using pop method // not recommended
while(numbers.length > 0) {
    numbers.pop()
}

console.log(numbers);