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

/* ---------- OPTIONS DATA EXTRACTION ---------- */

/**
 * kinyeri a kiválasztott rádiógombok értékeit
 * konvertálja az értékeket a megfelelö adattípusra
 * belerakja az értékeket egy tömbe 'array'
 * @param Values from DOM elements
 */
function getOptionsValues() {
  let array = [];
  document.querySelector(".js-btn-start").addEventListener("click", function() {
    array.push(Number(document.querySelector('input[name="stackSize"]:checked')?.value));
    array.push(Number(document.querySelector('input[name="difficult"]:checked')?.value));
    array.push(Boolean(document.querySelector('input[name="cardColor"]:checked')?.value));

    return array;
  });
};

/* ---------- CARD NUMBER OPERATIONS ---------- */

/**
 * legenerálja a kártyaértékeket 1-töl 13-ig
 * megduplázza a generált számokat
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

/**
 * megkeveri a megduplázott számokat
 * @param Array of shuffled numbers 
 */
function cardShuffler() {
  let cardNumbers = generateCardNumbers();
  let cardShuffled = cardNumbers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return cardShuffled;
};

function cardRender() {

};