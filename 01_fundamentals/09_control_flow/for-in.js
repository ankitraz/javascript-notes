const person = {
    Name: 'Ankit',
    age : 30
};
// for in to iterate over properties of an object.
for (let key in person) {
    console.log(key, person[key ]);
}

const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
}