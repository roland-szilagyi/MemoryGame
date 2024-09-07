// PAGES
let pageOptions = document.querySelector('.js-options');
let pageHome = document.querySelector('.js-home');

// BUTTONS
const buttonNext = document.querySelector('.js-btn-next');
const buttonHome = document.querySelector('.js-btn-home');
const buttonStart = document.querySelector('.js-btn-start');

// EVENTS
buttonNext.addEventListener('click', runNext);

function runNext() {
  pageHome.classList.add('hidden');
  pageOptions.classList.remove('hidden');
}