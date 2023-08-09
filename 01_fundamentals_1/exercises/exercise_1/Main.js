// Mark and John are trying to compare their BMI (Body Mass Index), which is 
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
// and height in meter).

// const markWeight = 78;
// const markHeight = 
// const johnWeight = 95;

function compareBMI(markWeight,markHeight,johnWeight,johnHeight) {
    bmi1 = calculateBMI(markWeight, markHeight)
    bmi2 = calculateBMI(johnWeight, johnHeight)
    return bmi1 > bmi2
}


function calculateBMI(mass,height) {
    return mass/(height ** 2)
}


markHigherBMI = compareBMI()
console.log(markHigherBMI);