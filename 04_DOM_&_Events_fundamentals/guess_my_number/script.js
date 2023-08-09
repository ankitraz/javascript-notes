'use strict'

// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.message').textContent = 'Correct Number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 23;


// // for reading from input field we use value method.
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
//=====================================================
const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20; //state variable


document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';



// clicking on buttons  - event listener
// we knnow that function is also just a value and that's why we can also pass it into another function as an argument.
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = " ⛔ No Number"
    } else if (guess === secretNumber ){
        document.querySelector('.message').textContent = "🎉 Correct Number"
        document.querySelector('.number').textContent = secretNumber;
    } else if(guess > secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = "📈Too high"
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "You lost the game 😭😭"
            document.querySelector('.score').textContent = 0;
        }
    } else if(guess < secretNumber){
        if (score > 1) {
            document.querySelector('.message').textContent = "📉 Too low"
            score--;
            document.querySelector('.score').textContent = score; 
        } else {
            document.querySelector('.message').textContent = "You lost the game 😭😭"
            document.querySelector('.score').textContent = 0;
        }
    }
});