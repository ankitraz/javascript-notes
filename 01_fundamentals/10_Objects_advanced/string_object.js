// String primitive
const message = 'hi'

// string object
const another = new String('hi');




console.log(message.length); // js will convert the string primitive to a string object in order to access the length property

console.log(message.includes('hi')); // true
console.log(message[1]);
console.log(message.startsWith('h'));
console.log(message.indexOf('i'));
console.log(message.replace('hi', 'hello'));
console.log(message.toUpperCase());
console.log(message.trim()); // removes white space from the beginning and end of a string
console.log(message.split('')); // splits a string into an array of substrings