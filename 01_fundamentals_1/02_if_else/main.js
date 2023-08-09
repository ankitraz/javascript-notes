const age = 17;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log(`You can drive!`);
} else {
    console.log(`You cannot Drive. you should wait another ${18 - age} years.`);
}