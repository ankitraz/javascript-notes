// let Name = "Ankit";
// let age = 30;


// object is used to group related variables and functions together

let person = {
    Name: "Ankit",  // properties of object
    age: 30
};


console.log(person);

//accessing properties of object


// dot notation
console.log(person.Name);
console.log(person.age);

// bracket notation
let Name = 'name';

person[Name] = 'Mary';

//printing updated object using bracket notation
console.log("-----------");
console.log(person['Name']);
console.log(person['age']);