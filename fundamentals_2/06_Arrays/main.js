// literal syntax to create an array.
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);


// different way to create an array.
const years = new Array(1442,1222,3332,1234)



// accesing element of array
console.log(friends[0]);// Michael
console.log(friends.length); //3 // amount of elemnts in the array.
console.log(friends[friends.length-1]); // peter // getting last element of array.


// updating the element of array
friends[0] = 'Ankit'
console.log(friends);

// IMP - we know that variable declared cosnt can not be changed but how is this const array is changing

// arrays can hold differnt types of values inncluing number, string, boolean etc

// we can also put array inside array
const ankit = ['Ankit', 'Raj', 2037 -1991, 'student', friends]

console.log(ankit);