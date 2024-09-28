import { gameState } from './app.js';

/** ---------- CARD FLIP EVENT LISTENERS ----------
 * inicializálja a kártyafordítás eseményfigyelőit
 * minden kártyához ('.js-card' elemekhez) hozzárendeli a kattintás eseményfigyelőt, amely a 'cardTurner' függvényt hívja meg a kártya fordításához
 * 
 * @returns {void}
 * @version 1.0.0
 */
export function cardActions() {
  let cards = document.querySelectorAll('.js-card');
  cards.forEach(card => {
    card.addEventListener('click', cardTurner)
  });
};

/** ---------- CARD TURNER ----------
 * kezeli a kártyafordítás eseményét
 * kicseréli a kártya képét a kattintott kártya ID-je alapján
 * hozzáadja a 'flipped' osztályt
 * eltávolítja az eseményfigyelőt, hogy ne lehessen újra megfordítani
 * meghívja a 'pushToFlippedCards' függvényt
 * 
 * @param {Event} event - esemény, amelyet a kártyára kattintás váltott ki
 * @returns {void}
 * @version 1.0.0
 */
function cardTurner(event) {
  const clickedCard = event.target;
  const cardId = clickedCard.dataset.cardId;
  clickedCard.src = `./src/assets/cards/${cardId}.svg`;

  clickedCard.classList.add('flipped');

  clickedCard.removeEventListener('click', cardTurner);
  pushToFlippedCards(cardId);
};

/** ---------- FLIPPED CARDS ARRAY (PUSH) ----------
 * hozzáadja a megfordított kártya azonosítóját a 'flippedCards' tömbhöz és ellenőrzi a tömb hosszát
 * a kártya azonosítóját ('cardId') hozzáfűzi a 'gameState.flippedCards' tömbhöz
 * meghívja 'flippedCardsLengthCheck' függvényt
 * 
 * @param {string} value - A megfordított kártya azonosítója
 * @returns {void}
 * @version 1.0.0
 */
function pushToFlippedCards(value) {
  gameState.flippedCards.push(value);

  flippedCardsLengthCheck();
};

/** ---------- FLIPPED CARDS ARRAY (LENGTH-CHECK) ----------
 * Ellenőrzi a 'flippedCards' tömbjének hosszát
 * Ha a tömb hossza 2, akkor meghívja a 'flippedCardsValuesCheck' függvényt
 * majd kiüríti a 'flippedCards' tömböt
 *
 * @returns {void}
 * @version 1.0.0
 */
function flippedCardsLengthCheck() {
  if ( gameState.flippedCards.length === 2 ) {
    flippedCardsValuesCheck();
    gameState.flippedCards = [];
  };
};

/** ---------- FLIPPED CARDS ARRAY (VALUES-CHECK) ----------
 * ellenőrzi hogy a megfordított kártyák értékei megegyeznek-e
 * ha igen akkor meghívja a 'pairsFoundCounter' függvényt
 * 
 * @returns {void}
 * @version 1.0.0
 */
function flippedCardsValuesCheck() {
  if ( gameState.flippedCards[0] === gameState.flippedCards[1] ) {
    console.log(gameState.flippedCards)

    pairsFoundCounter();
  };
};

/** ---------- INCREASING FOUND PAIRS ----------
 * a függvény növeli a 'pairsFound' értékét 1-el
 * 
 * @returns {void}
 * @version 1.0.0
 */
function pairsFoundCounter() {
  gameState.pairsFound += 1;
  console.log(gameState.pairsFound);
};