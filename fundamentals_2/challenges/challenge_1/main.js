const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3;


const dolphinsAvg = calcAverage(85, 54,41)
const koalasAvg = calcAverage(23,34,27)

function checkwinner(dolphinsAvg, koalasAvg){
    if (dolphinsAvg > 2*koalasAvg) {
        console.log(`dolphins win (${dolphinsAvg} vs ${koalasAvg})`);
    } else if(koalasAvg > 2*dolphinsAvg){
        console.log(`koalas win (${koalasAvg} vs ${dolphinsAvg})`);
    } else {
        console.log('No team wins.');
    }
}

checkwinner(dolphinsAvg,koalasAvg);