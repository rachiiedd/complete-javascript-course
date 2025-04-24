'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = '18';
// document.querySelector('.score').textContent = '14';

// document.querySelector('.guess').value = 14;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(typeof guessNumber);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Provide a number dude!';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent =
      'Whoa dude, you guessed it right!';
  } else if (guessNumber > secretNumber) {
    document.querySelector('.message').textContent = 'To high dude -_-';
    document.querySelector('.score').textContent = score;
    score--;
  } else if (guessNumber < secretNumber) {
    document.querySelector('.message').textContent = 'Aim higher dude!';
    document.querySelector('.score').textContent = score;
    score--;
  }
});
