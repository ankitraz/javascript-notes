function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipCode;
}


let address1 = new Address('a','b','c')
let address2 = new Address('a','b','c')



// function that checks the whether all the properties of two objects are equal or not
function areEqual(object1, object2) {
    return object1.street === object2.street && object1.city === object2.city && object1.zipCode === object2.zipCode;
}

function areSame(object1, object2) {
    return object1 === object2;
}

console.log(areEqual(address1,address2));