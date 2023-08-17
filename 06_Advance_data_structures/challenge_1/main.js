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


// const players1 = game.players[0];


// task 1
const [players1,players2] = game.players;

// task 2
const[gk,...fieldPlayers] = players1;


// task 3
const allPlayers = [...game.players[0], ...game.players[1]]


//task 4
const players1Final = [...players1,'Thiago', 'Coutinho','Perisic']


//task 5
const {team1, x: draw, team2} = game.odds;


//task 6
const printGoals = function(...players){
    for (let i = 0; i < players.length; i++) {
        console.log(players[i]);
    }
    console.log(`No of goals: ${players.length}`);
}

// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals(...game.scored)


// task 7
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');