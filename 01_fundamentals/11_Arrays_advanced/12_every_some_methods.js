//very useful methods

const numbers = [1,-1,2,3]

const allPositive = numbers.every(function(value){
    return value >= 0;
})


// sum method
const atleastOnePositive = numbers.some(function(value){
    return value >= 0;
})

console.log(allPositive);
console.log(atleastOnePositive);