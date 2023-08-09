// we know that function are also a values.
// and if it is a value then we can also store it in an object.


const ankit = {
    firstName: 'Ankit',
    lastName: 'Raj',
    birthYear: 2002,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriverLicense: false,

    //adding function
    // note:  any function that is attached to an oject is called method.
    // calcAge: function(birthYear){ // calcAge is a property that holds a function value.
    //     return 2037 - birthYear
    // }

    // object calling the method.
    // calcAge: function(){ // calcAge is a property that holds a function value.
    //     // console.log(this); // this points to ankit object
    //     return 2037 - this.birthYear // this.birthyear points to the birthyear of ankit
    // }


    calcAge: function(){
        this.age = 2023 - this.birthYear // we calculated the age and stored it in a new property(age) of ankit object.
        return this.age;
    },


    getSummary: function(){
        return (`${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license.`);
    }
}


// //same as above // this would not work in object.
// const calcAge = function (birthYear) {
//     return 2037 - birthYear
// }


// assessing method

console.log(ankit.calcAge()); // accessing methods using dot notation.
// console.log(ankit['calcAge'](2002)); // accesing methods using bracket notaiton

console.log(ankit.age);
console.log(ankit.age);
console.log(ankit.age);


// challenge
//"Ankit is a 46-year old teacher, and he has a/no driver's license"
console.log(ankit.getSummary());
