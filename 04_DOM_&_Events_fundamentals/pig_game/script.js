'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1'); // this getElementbyId also works same as query selector, we just dont need to use '#'
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
const player0EL = document.querySelector('.player--0')
const player1EL = document.querySelector('.player--1')
let playing = true;


let randomNum = 0;
let currentScore = 0;
let activePlayer = 0;
const scores = [0,0];


const resetGame = function(){
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
    randomNum = 0;
    currentScore = 0;
    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
    score0EL.textContent = scores[0];
    score1EL.textContent = scores[1];
    current0EL.textContent = currentScore;
    current1EL.textContent = currentScore;
    playing = true;
    dice.classList.add('hidden')
}


// // starting conditions
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// dice.classList.add('hidden');


//reseting game on initial start
resetGame();




// roll the dice
btnRoll.addEventListener('click',function(){
    if (playing) {
        // 1. generating a random dice roll
     randomNum = Math.trunc(Math.random()*6) + 1
     // 2. display dice
     dice.classList.remove('hidden')
     dice.src = `dice-${randomNum}.png`;
     //3. check for rolled 1, if ture, switch to next player.
     if (randomNum !== 1) {
         // add random no to current score.
         currentScore += randomNum;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
         
     } else {
         // switch to next player
         currentScore = 0;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
         activePlayer = activePlayer === 0 ? 1 : 0;
         player0EL.classList.toggle('player--active');
         player1EL.classList.toggle('player--active');
     }
    }
})

// holding the score.
btnHold.addEventListener('click', function(){
    if (playing) {
        scores[activePlayer] += currentScore

    score0EL.textContent = scores[0];
    score1EL.textContent = scores[1];


    if (scores[activePlayer] >=20) {
        // finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        playing = false;
    }
  
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
    }
})

console.log(activePlayer);

// reseting the game
btnNew.addEventListener('click', resetGame)
