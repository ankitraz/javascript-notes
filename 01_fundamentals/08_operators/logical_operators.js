// three types of logical operators

// logical AND (&&) -> returns TRUE if both operand are TRUE

console.log(true && true);
console.log(true && false);


let highIncome = false;
let goodCreditScore = false;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);




//======================================================================
// Logical OR (||) -> return True if one of the operands is TRUE
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);


//======================================================================

// NOT (!)
eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan; // appicationrefused will always the opposite of eligibleForloan
console.log('Application refused: ' + applicationRefused);