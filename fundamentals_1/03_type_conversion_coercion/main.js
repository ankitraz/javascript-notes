// when javascript automatically converts types -- coercion
// when we explicitly converts value types - conversion

const inputYear = '1991';
console.log(Number(inputYear) + 18); // converting string to numbers.
console.log(inputYear + 18);


const num = 89;
console.log(String(num) + ' Years'); //converting number to string.



// type coercion - very important to understand.
console.log('I am ' + 23 + ' years old.'); // plus operator automatically triggers a  coercion to strings.
console.log('23' - '10' - 3); // minus operator triggers opposite conversion. strings are converted to numbers.
console.log('23' + '10' + 3); // this will convert number to the string.
console.log('23' * '2'); // both of them gets converted to numbers. same is true for dividing.


console.log(2+3+4+'9'); // evaluated from left to right. first 2+3 = 5 + 4 = 9 + some string ('5') = '95'
console.log('9' + 2 + 3 - '4'); // again evaluate from left to right. first '9' + 2 = '92' + 3 = '923' - 4 = 923 - 4 = 919
console.log('10'-'4'-'3'-2 + 1 +'5'); // "25"

console.log("2" /3);