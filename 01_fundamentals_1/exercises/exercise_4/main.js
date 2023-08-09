const bill = 40;
let tip = bill >= 50 && bill <= 300 ? 0.15 : 0.20 
       && bill < 50 ? 0 : 0



console.log(`The bill was ${bill}, the tip was ${bill*tip}, and the total value ${bill + bill*tip}`);