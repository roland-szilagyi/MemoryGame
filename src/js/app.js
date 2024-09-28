import { pageNavigationEvents } from './pageNavigation.js';
import { getOptionsValues } from './cardGenerator.js';
import { generateCardNumbers } from './cardGenerator.js';
import { renderCards } from './cardGenerator.js'
import { cardActions } from './cardActions.js';

/* ---------- ÁLLAPOT LÉTREHOZÁSA ---------- */

export let gameState = {
  stackSize: 0,
  difficult: 0,
  cardColor: '',
  flippedCards: [],
  pairsFound: 0,
};

pageNavigationEvents();

/* ---------- JÁTÉK INICIALIZÁLÁSA ---------- */

export function initializeGame() {
  getOptionsValues();
  const shuffledCards = generateCardNumbers(gameState.stackSize);   // <--- MEGKEVERT KÁRTYATÖMB
  renderCards(shuffledCards, gameState.cardColor);                  // <--- MEGKEVERT KÁRTYATÖMB FELHASZNÁLÁSA A "KÁRTYA RENDERELÉSE" FÜGGVÉNYBEN
  
  cardActions();                                                    // <--- ESEMÉNYFIGYELÖK AKTIVÁLÁSA A KÁRTYAFORDÍTÁSHOZ
};