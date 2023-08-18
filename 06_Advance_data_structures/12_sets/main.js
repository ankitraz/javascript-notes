'use strict';

const arr = [2,4,3,3,3,7]

const orderSet = new Set(arr);
console.log(orderSet);

console.log(new Set('Ankitraj'));


// set methods
console.log(orderSet.size);
console.log(orderSet.has(3));
console.log(orderSet.add(9));
orderSet.delete(2)
console.log(orderSet);


// sets are iterables so we can iterate over it, but they do not get any order like we can't access any element of set by any index.
for (const element of orderSet) {
    console.log(element);
}

// generally used for removing duplicated from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Mananger', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];

console.log(staffUnique);