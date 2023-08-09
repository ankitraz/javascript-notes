const calcTip = (amount) => amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.20


const bills = [125,555,44]
const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])]

const total = [bills[0] + tips[0], bills[1]+ tips[1], bills[2]+tips[2]]

console.log(total);