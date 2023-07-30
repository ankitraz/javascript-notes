// super useful methods

const numbers = [1,2,3]

const result = numbers.join('-')

console.log(result);

const message = "This is my first message."
const parts = message.split(' ')
console.log(parts);

const combined = parts.join('-')
console.log(combined);

// this technique is particularly useful when building a URL slug.