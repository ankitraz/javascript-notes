const friends = ['Michael', 'Steven', 'Peter']

//add an element after array.
friends.push('Ankit')

// add and element before array
friends.unshift('John')  // this method also returns the new lenght of the array. we just need to store it in a variable to use it actually.


//remove element
friends.pop()   // this method returns the removed elemnt.
const removedElement = friends.pop()


console.log(removedElement);

// remove the first element
friends.shift() // return the element which is removed.


// return the index of array element.
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven.');
}

console.log(friends);