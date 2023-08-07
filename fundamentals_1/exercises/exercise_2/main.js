function compareBMI(markWeight,markHeight,johnWeight,johnHeight) {
    bmi1 = calculateBMI(markWeight, markHeight)
    bmi2 = calculateBMI(johnWeight, johnHeight)
    if (bmi1 > bmi2) {
        console.log(`Marks's BMI (${bmi1}) is higher than John's (${bmi2})!`);
    } else {
        console.log(`john's BMI (${bmi2}) is higher than Marks's (${bmi1})!`);
    }
}


function calculateBMI(mass,height) {
    return mass/(height ** 2)
}


compareBMI(78,1.69,92,1.95)