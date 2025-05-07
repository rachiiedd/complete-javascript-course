'use strict';

// Selecting the element from HTML
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// system data
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Global functions
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Selecting button from HTML

const btwNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = '0';
score1El.textContent = '0';
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;

    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // switch to next player if dice = 1

    switchPlayer();
  }
});
// Add current score to active player's score (in the array)
btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;

  document.querySelector(`.score--${activePlayer}`).textContent =
    scores[activePlayer];
});

// Check if player's score is >= 100

if (scores[activePlayer] >= 200) {
  //finish game

  document
    .querySelector(`player--${activePlayer}`)
    .classList.add(`player--winner`);

  document
    .querySelector(`player--${activePlayer}`)
    .classList.remove('player--active');
}

// Switch to the next player
else {
  switchPlayer();
}
