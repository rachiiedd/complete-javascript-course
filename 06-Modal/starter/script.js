'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const modalHidden = document.querySelector('.close-modal');

for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i].textContent);
}

console.log(modalHidden);
