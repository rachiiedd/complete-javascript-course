'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = '18';
// document.querySelector('.score').textContent = '14';

// document.querySelector('.guess').value = 14;
// console.log(document.querySelector('.guess').value);

// declarations
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
// event listener
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // set new highscore

  // when there is no number
  if (!guessNumber) {
    displayMessage('Provide a number dude!');
  }

  // when the number is right
  else if (guessNumber === secretNumber) {
    displayMessage('Whoa dude, you guessed it right!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the number is to high
  } else if (guessNumber !== secretNumber) {
    displayMessage(
      guessNumber > secretNumber ? 'To high dude -_-' : 'Aim higher dude!'
    );
    score--;
    document.querySelector('.score').textContent = score;

    // when the number is to low
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;

  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = 'rgb(34, 34, 34)';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
