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
  buttonNext.classList.add('hidden');
  buttonHome.classList.remove('hidden');
  buttonStart.classList.remove('hidden');
}

buttonHome.addEventListener('click', runHome);
function runHome() {
  pageHome.classList.remove('hidden');
  pageOptions.classList.add('hidden');
  buttonNext.classList.remove('hidden');
  buttonHome.classList.add('hidden');
  buttonStart.classList.add('hidden');
}