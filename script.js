'use strict';

var nav_links = document.getElementById('nav-links');
function show_menu() {
  nav_links.style.right = '0';
}
function hide_menu() {
  nav_links.style.right = '-200px';
}

// for modal window

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.modal-open');
const closeModal = document.querySelector('.modal-close');

openModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// end of modal window
