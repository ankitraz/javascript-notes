const now = new Date();

console.log(now);

const date = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.getDate();
now.setFullYear(2017);
console.log(now);
console.log(now.toDateString());
console.log(now.toTimeString());