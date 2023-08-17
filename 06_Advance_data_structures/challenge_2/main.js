'use strict';

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',

    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


// task 1
for (const [goalNO,playerName] of game.scored.entries()) {
    // console.log(`Goal ${goalNO + 1}:${playerName}`);
}

// task 2
const odd = Object.entries(game.odds)
// console.log(odd);
let sum = 0;

for (const [ ,score] of odd) {
    // console.log(score);
    sum+=score
}

let avg = sum/odd.length;
// console.log(avg);


// task 3

for (const [teamName,teamScore] of odd) {
    console.log(`Odd of ${teamName === 'x'? 'draw': `victory ${game[teamName]}`} : ${teamScore}`);
}


//task 4
const scored = game.scored;
// console.log(scored);

const scorers = {};

for (let i = 0; i < scored.length; i++) {
  const player = scored[i];
  if (scorers[player]) {
    scorers[player] += 1;
  } else {
    scorers[player] = 1;
  }
}

// console.log(scorers);


