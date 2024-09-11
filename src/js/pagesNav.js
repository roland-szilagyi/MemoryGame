// PAGES
const pageHome = document.querySelectorAll('.js-home');
const pageOptions = document.querySelectorAll('.js-options');
const pageGame = document.querySelectorAll('.js-game');

const buttonNext = document.querySelector('.js-btn-next');
const buttonHome = document.querySelector('.js-btn-home');
const buttonStart = document.querySelector('.js-btn-start');
const buttonStop = document.querySelector('.js-btn-stop');

buttonNext.addEventListener('click', runNext);
function runNext() {
  pageHome.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageOptions.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};

buttonHome.addEventListener('click', runHome);
function runHome() {
  pageOptions.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageHome.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};

buttonStart.addEventListener('click', runStart);
function runStart() {
  pageOptions.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageGame.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};

buttonStop.addEventListener('click', runStop);
function runStop() {
  pageGame.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageOptions.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};