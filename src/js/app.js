import { getOptionsValues } from './script.js';
import { generateCardNumbers } from './script.js';
import { renderCards } from './script.js'
import { pageSelect } from './script.js';
import { cardTurnEvents } from './script.js';

/* ---------- GOMBOK ESEMENYFIGYELÖI ---------- */

document.querySelector('.js-btn-next').addEventListener('click', function() {
  pageSelect('.js-home', '.js-options');
});

document.querySelector('.js-btn-start').addEventListener('click', function() {
  initializeGame(); /* --- JÀTÉK INDÍTÁSA --- */
  pageSelect('.js-options', '.js-game');
});

document.querySelector('.js-btn-stop').addEventListener('click', function() {
  pageSelect('.js-game', '.js-options');
});

document.querySelector('.js-btn-home').addEventListener('click', function() {
  pageSelect('.js-options', '.js-home');
});

/* ---------- ÁLLAPOT LÉTREHOZÁSA ---------- */

let gameState = {
  stackSize: 0,
  difficult: 0,
  cardColor: '',
  flippedCards: [],
  pairsFound: 0,
};

/* ---------- ÁLLAPOT FRISSÍTÉSE ( START GOMB ) ---------- */

function updateGameState(updatedValues) {
  Object.assign(gameState, updatedValues);
};

/* ---------- JÁTÉK INICIALIZÁLÁSA ---------- */

function initializeGame() {
  const options = getOptionsValues();                        // <--- OPTIONS ÉRTÉKEK
  updateGameState(options);                                  // <--- OPTIONS ÉRTÉKEK RÖGZÍTÉSE AZ ÁLLAPOTBA (stackSize, difficult, cardColor)

  const shuffledCards = generateCardNumbers(gameState.stackSize);   // <--- MEGKEVERT KÁRTYATÖMB
  renderCards(shuffledCards, gameState.cardColor);           // <--- MEGKEVERT KÁRTYATÖMB FELHASZNÁLÁSA A "KÁRTYA RENDERELÉSE" FÜGGVÉNYBEN
  cardTurnEvents();                                          // <--- ESEMÉNYFIGYELÖK A KÁRTYAFORDÍTÁSHOZ
};