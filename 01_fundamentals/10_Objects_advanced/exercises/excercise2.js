// factory function to initialize an object

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
}


// constructor function to initialize an object

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipCode;
}


let address1 = new createAddress('a', 'muz', 842002);
console.log(address1);


let address2 = new Address('b', 'dbg', 846004)
console.log(address2);