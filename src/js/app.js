import { getOptionsValues } from './script.js';
import { cardShuffler } from './script.js';
import { renderCards } from './script.js'
import { pageSelect } from './script.js';
import { cardTurnEvents } from './script.js';

/* ---------- ÁLLAPOT ---------- */

let gameState = {
  stackSize: 0,
  difficult: 0,
  cardColor: '',
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
  initializeGame();
  pageSelect('.js-options', '.js-game');
});

document.querySelector('.js-btn-stop').addEventListener('click', function() {
  pageSelect('.js-game', '.js-options');
});

document.querySelector('.js-btn-home').addEventListener('click', function() {
  pageSelect('.js-options', '.js-home');
});

/* ---------- JÁTÉK INICIALIZÁLÁSA ---------- */

function initializeGame() {
  const options = getOptionsValues();                        // <--- OPTIONS ÉRTÉKEK
  updateGameState(options);                                  // <--- OPTIONS ÉRTÉKEK RÖGZÍTÉSE AZ ÁLLAPOTBA (stackSize, difficult, cardColor)
  const shuffledCards = cardShuffler(gameState.stackSize);   // <--- MEGKEVERT KÁRTYATÖMB
  renderCards(shuffledCards, gameState.cardColor);                                // <--- MEGKEVERT KÁRTYATÖMB FELHASZNÁLÁSA A "KÁRTYA RENDERELÉSE" FÜGGVÉNYBEN
  cardTurnEvents();                                          // <--- ESEMÉNYFIGYELÖK A KÁRTYAFORDÍTÁSHOZ
};