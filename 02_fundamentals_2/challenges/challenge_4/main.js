// Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
// 20%


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 ,52];
const tips = [];
const totals = [];


// function to calculate tip depending on amount.
function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill*0.15 : bill*0.20;
}

// calculating tip and totals.
for (const bill of bills) {
    tips.push(calcTip(bill));
    totals.push(calcTip(bill) + bill)
}

const calcAverage = function(arr){
    let sum = 0;
    for (const element of arr) {
        sum += element;
    }

    return sum/(arr.length - 1);
}

console.log(Number(calcAverage(totals).toFixed(3)));
console.log(totals);