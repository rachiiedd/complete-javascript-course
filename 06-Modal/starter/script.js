'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const modalHidden = document.querySelector('.close-modal');

const removeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const addModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', addModal);
  modalHidden.addEventListener('click', removeModal);

  overlay.addEventListener('click', removeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
      removeModal();
  });
}
