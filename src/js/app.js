import { getOptionsValues } from './script.js';       // <--- import: OPTIONS ÉRTÉKEK RÖGZÍTÉSE
import { cardShuffler } from './script.js';           // <--- import: KÁRTYAÉRTÉKEK MEGKEVERÉSE EZ AUTOMATIKUSAN IMPORTÁLJA A 'generateCardNumbers' FÜGGVÉNYT IS, MERT AZT HASZNÁLJA A 'cardShuffler' FÜGGVÉNY
import { pageSelect } from './script.js';             // <--- import: OLDALAK VÁLTÁSA
import { cardTurnEvents } from './script.js';

/* ---------- ÁLLAPOT ---------- */

let gameState = {
  stackSize: 0,
  difficult: 0,
  cardColor: false,
  flippedCards: [],
  pairsFound: 0,
};

/* ---------- ÁLLAPOT FRISSÍTÉSE ---------- */

function updateGameState(updatedValues) {
  Object.assign(gameState, updatedValues);
};

/* ---------- GOMBOK ESEMENYFIGYELÖI ---------- */

document.querySelector('.js-btn-next').addEventListener('click', function() {
  pageSelect('.js-home', '.js-options');
});

document.querySelector('.js-btn-start').addEventListener('click', function() {
  initializeGame(); // <--- ELINDITJA A JÁTÉK INICIALIZÁLÁSÁT
  pageSelect('.js-options', '.js-game');
});

document.querySelector('.js-btn-stop').addEventListener('click', function() {
  pageSelect('.js-game', '.js-options');
});

document.querySelector('.js-btn-home').addEventListener('click', function() {
  pageSelect('.js-options', '.js-home');
});

/* ---------- KÁRTYÁK RENDERELÉSE ---------- */

function renderCards(shuffledCards) {
  let cardsCont = document.querySelector('.js-cards-cont');
  cardsCont.innerHTML = '';
  shuffledCards.forEach(cardValue => {
    cardsCont.innerHTML += `<img src="./src/assets/cards/cardBackBlue.svg" data-card-id="${cardValue}" alt="card" class="cards js-card">`;
  });
};

/* ---------- INITIALIZE GAME ---------- */

function initializeGame() {
  const options = getOptionsValues();                        // <--- OPTIONS ÉRTÉKEK
  updateGameState(options);                                  // <--- OPTIONS ÉRTÉKEK RÖGZÍTÉSE AZ ÁLLAPOTBA (stackSize, difficult, cardColor)
  const shuffledCards = cardShuffler(gameState.stackSize);   // <--- MEGKEVERT KÁRTYATÖMB
  renderCards(shuffledCards);                                // <--- MEGKEVERT KÁRTYATÖMB FELHASZNÁLÁSA A "KÁRTYA RENDERELÉSE" FÜGGVÉNYBEN
  cardTurnEvents();                                          // <--- 
};