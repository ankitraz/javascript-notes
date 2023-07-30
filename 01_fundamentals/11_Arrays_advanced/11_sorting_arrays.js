const numbers = [2,3,1]

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

// sorting for objects

const courses = [{
    id: 1, name: 'Node.js'
},
{id: 2, name: 'javascript'}]

courses.sort(function(a,b){
    // if a < b => -1
    // if a < b => 1
    // if a === b => 0

    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {
        return -1
    }
    if (nameA > nameB) {
        return 1
    }
    return 0;
})

console.log(courses);