const first = [1,2,3]
const second = [4,5,6]

// combining two arrays using spread operator.
// provide more flexibility.
// const combined = [...first, ...second]; 

// we can also combine two arrays with two element in between  or at end.
const combined = [...first, 'inbetween',...second, 'last']

const superCombined = [...combined]
console.log(superCombined);


console.log(combined);
