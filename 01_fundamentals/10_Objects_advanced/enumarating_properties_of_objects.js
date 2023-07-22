const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

for (let key in circle) {
    console.log(key, circle[key]);
}

// for (const key of object) {
//     console.log(key);  // TypeError: object is not iterable, we can't use for-of loop with objects
// }

for (const key of Object.keys(circle)) {  // Object.keys() returns an array of keys
    console.log(key);
}


// object methods
Object.keys(circle); // returns an array of keys
Object.values(circle); // returns an array of values


// to check if a property exists in an object
if ('radius' in circle) { console.log('yes'); }