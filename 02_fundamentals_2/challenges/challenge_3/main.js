// mark's object
const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        this.BMI = this.mass/this.height**2 
        return this.BMI
    }
}

// john's object
const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        this.BMI = this.mass/this.height**2 
        return this.BMI
    }
}


if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullname}'s BMI (${mark.BMI.toFixed(2)}) is higher than John's (${john.BMI.toFixed(2)})`);
} else {
    console.log(`${john.fullname}'s BMI (${john.BMI.toFixed(2)}) is higher than Mark's (${mark.BMI.toFixed(2)})`);
}