let firstName = 'Matilda';

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: function() {
        console.log(`Hey ${this.firstName}`)
}
};
 

jonas.greet();
// console.log(this.firstName);