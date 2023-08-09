function avg(score1, score2, score3) {
    return (score1+score2+score3)/3
}

function compareScore(team1, team2) {
    if (team1 === team2 && team2 >= 100) {
        console.log('Draw!');
    } else if(team1 > team2 && team1 >= 100) {
        console.log(`dolphins wins!`);
    } else if(team1 < team2 && team2 >= 100){
        console.log(`koalas wins!`);
    } else {
        console.log("No team wins the trophy.🥲");
    }
}

const dolphins = avg(96,108,101)
const koalas = avg(88,91,106)

compareScore(dolphins, koalas);