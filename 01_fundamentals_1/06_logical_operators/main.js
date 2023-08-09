const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;



console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision

if (shouldDrive && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive.');
}