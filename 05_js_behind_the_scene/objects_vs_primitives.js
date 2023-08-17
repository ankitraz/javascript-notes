const ankit = {
    name: "Ankit",
    age: '20',
}


const john = ankit;
john.age = 30;


// checking whether the age property of both the objects are same or not
console.log(ankit.age); // 30