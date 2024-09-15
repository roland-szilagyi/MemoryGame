import { getOptionsValues } from './script.js';       // <--- import: OPTIONS ÉRTÉKEK RÖGZÍTÉSE
import { generateCardNumbers } from './script.js';    // <--- import: KÁRTYAÉRTÉKEK LEGENERÁLÁSA
import { cardShuffler } from './script.js';           // <--- import: KÁRTYAÉRTÉKEK MEGKEVERÉSE
import { pageSelect } from './script.js';             // <--- import: OLDALAK VÁLTÁSA

/* ---------- ÁLLAPOT ---------- */

let gameState = {
  stackSize: 9,
  difficult: 2,
  cardColor: true,
  flippedCards: [],
  pairsFound: 0
};

/* ---------- ÁLLAPOT FRISSÍTÉSE ---------- */

function updateGameState(updatedValues) {
  Object.assign(gameState, updatedValues);
};

/* ---------- BUTTON EVENTS ---------- */

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

function renderCards(value) {
  for ( let i = 0; i < value; i++ ) {
    document.querySelector('.js-cards-cont').innerHTML +=
    '<img src="./src/assets/cards/cardBackBlue.svg" alt="card" class="cards  js-card">'
  }
};

/* ---------- INITIALIZE GAME ---------- */

function initializeGame() {
  const options = getOptionsValues();       // <--- OPTIONS ÉRTÉKEK RÖGZÍTÉSE
  updateGameState(options);                 // <--- ÁLLAPOT FRISSÍTÉSE (AZ OPTIONS ÉRTÉKEKKEL)
  generateCardNumbers(gameState.stackSize); // <--- KÁRTYAÉRTÉKEK LEGENERÁLÁSA
  cardShuffler();                           // <--- KÁRTYAÉRTÉKEK MEGKEVERÉSE
  renderCards(gameState.stackSize);         // <--- KÁRTYÁK RENDERELÉSE
};