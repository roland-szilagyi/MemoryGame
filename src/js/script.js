/* ---------- PAGES NAVIGATION ---------- */
// PAGES
const pageHome = document.querySelectorAll('.js-home');
const pageOptions = document.querySelectorAll('.js-options');
const pageGame = document.querySelectorAll('.js-game');

// BUTTONS
const buttonNext = document.querySelector('.js-btn-next');
const buttonHome = document.querySelector('.js-btn-home');
const buttonStart = document.querySelector('.js-btn-start');
const buttonStop = document.querySelector('.js-btn-stop');

// PAGE LOADERS
buttonNext.addEventListener('click', runNext);
function runNext() {
  pageHome.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageOptions.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
}

buttonHome.addEventListener('click', runHome);
function runHome() {
  pageOptions.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageHome.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
}

buttonStart.addEventListener('click', runStart);
function runStart() {
  pageOptions.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageGame.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
}

buttonStop.addEventListener('click', runStop);
function runStop() {
  pageGame.forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  pageOptions.forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
}

/* ---------- GAME PLAY ---------- */

/**
 * legenerálja a kártyaértékeket 1-töl 13-ig.
 * @param Array of '1' ... '13'
 */
function generateCardNumbers() {
  let cardNumbers = [];
  for ( let i = 1; i <= 13; i++ ) {
    cardNumbers.push(i);
    cardNumbers.push(i);
  };
  return cardNumbers;
};

function cardShuffler() {

}

function cardRender() {

}

console.log( generateCards() );

/* 
  1. KÁRTYÁK AZ ASZTALRA - ALFELADATOK:
  - generateCards: legenerál 3 kártyaértéket
  - cardDoubler: megduplázza a kártyaértékeket
  - cardShuffler: megkeveri a kártyaértékeket
  - cardRender: megjeleníti a kártyákat
*/