import { navigationEvents } from './navigation.js';
import { getOptionsValues } from './gameInitializer.js';
import { generateCardNumbers } from './gameInitializer.js';
import { renderCards } from './gameInitializer.js'
import { cardActions } from './cardActions.js';

navigationEvents();

/** ---------- STATE INITIALIZATION ----------
 * a játék globális állapotát tároló objektum
 * tartalmazza a kártyapakli méretét, a nehézségi szintet, a kártyák színét, 
 * a megfordított kártyák tömbjét és a megtalált párok számát
 * 
 * @property {number} stackSize - a játékban használt kártyák száma
 * @property {number} difficult - a játék nehézségi szintje
 * @property {string} cardColor - a kártyák hátlapjának színe (kék vagy piros)
 * @property {Array<string>} flippedCards - az aktuálisan megfordított kártyák azonosítóit tartalmazó tömb
 * @property {number} pairsFound - a megtalált párok száma
 * @version 1.0.0
 */
export let gameState = {
  stackSize: 0,
  difficult: 0,
  cardColor: '',
  flippedCards: [],
  pairsFound: 0,
};

/** ---------- STATE UPDATE ----------
 * frissíti a `gameState` objektumot az új értékekkel
 * a megadott `newState` értékek felülírják a meglévő `gameState` tulajdonságokat
 * 
 * @param {Object} newState - Az új állapotot tartalmazó objektum, amely felülírja a `gameState` tulajdonságait.
 * @returns {void}
 * @version 1.0.0
 */

export function updateGameState(newState) {
  Object.assign(gameState, newState);
};

/** ---------- GAME INITIALIZATION ----------
 * mentésre kerülnek a beállítások (stackSize, difficult, cardColor)
 * legenerálja és megkeveri a kártyák értékeit
 * rendereli a kártyákat a felületen
 * aktiválja az eseményfigyelőket a kártyafordításhoz
 * 
 * @returns {void}
 * @version 1.0.0
 * @example
 */

export function initializeGame() {
  const optionsValues = getOptionsValues();  // SAVING OPTIONS VALUES
  updateGameState(optionsValues);            // STATE UPDATE

  const cardNumbers = generateCardNumbers(); // GENERATING AND SHUFFLING CARD VALUES
  updateGameState(cardNumbers);              // STATE UPDATE

  renderCards();                             // RENDERING CARDS
  cardActions();                             // Aktiváljuk az eseményfigyelőket
};