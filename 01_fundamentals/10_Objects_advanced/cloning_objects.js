const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

const another = {};

// for (let key in circle) { // this is not a good way to clone an object
//     another[key] = circle[key];
// }


// efficient ways to clone an object
// 1. using Object.assign() method
const another1 = Object.assign({ color: 'yellow'}, circle);
console.log(another1);


// 2. using spread operator
const another2 = { ...circle };