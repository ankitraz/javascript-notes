const ankit = {
    firstName: 'Ankit',
    lastName: 'Raj',
    age: 2037-1991,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven']
}

console.log(ankit);


// dot notation to retrieve the property of an object
console.log(ankit.lastName);

// bracket notation
console.log(ankit['lastName']);  // biggest difference is that we can perform inside the bracket. but not with dot notation.

// use case of bracket notation
const nameKey = 'Name';
console.log(ankit['first' + nameKey]); // this will resolved to ankit[firstName]

//  we cant do above thing with dot notation.


// another use case of bracket notation
// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.')

// if (ankit[interestedIn]) {
//     console.log(ankit[interestedIn]);
// } else {
//     console.log(`${interestedIn} does not exist. Choose between firstName, lastName, age, job and friends.`);
// }


// adding a new properties to the object using dot and bracket notation

ankit.location = 'India'
ankit['twitter'] = '@isAnkit_'

console.log(ankit);

// challenge
// "Ankit has 3 friends, and his best friend is called Michael"

console.log(`${ankit.firstName} has ${ankit.friends.length} friends, and his best friend is called ${ankit.friends[0]}.`);
