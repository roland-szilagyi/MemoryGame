import { gameState } from './app.js';

/** ---------- CARD FLIP EVENT LISTENERS ----------
 * inicializálja a kártyafordítás eseményfigyelőit
 * minden kártyához ('.js-card' elemekhez) hozzárendeli a kattintás eseményfigyelőt, amely a 'cardTurner' függvényt hívja meg a kártya fordításához
 * 
 * @returns {void}
 * @version 1.0.0
 */
export function cardActions() {
  let cards = document.querySelectorAll('.inactive-card');
  cards.forEach(card => {
    card.addEventListener('click', cardTurnEvent)
  });
};

/** ---------- CARD TURN EVENT ----------
 * kártyára való kattintáskor ha a kártya és párja még nem lett megtalálva ('done'):
 * kicseréli a kártya képét a kattintott kártya ID-je alapján
 * kicseréli az 'inactive-card' osztályt 'active-card'-ra
 * eltávolítja az eseményfigyelőt, hogy ne lehessen újra megfordítani
 * meghívja a 'pushToFlippedCards' függvényt a 'cardId' attributummal
 * 
 * @param {Event} event - esemény, amelyet a kártyára kattintás váltott ki
 * @returns {void}
 * @version 1.0.0
 */
function cardTurnEvent(event) {
  const clickedCard = event.target;
  const cardId = clickedCard.dataset.cardId;

  if ( !clickedCard.classList.contains('done') ) {
    clickedCard.src = `./src/assets/cards/${cardId}.svg`;
    clickedCard.classList.replace('inactive-card', 'active-card');
    clickedCard.removeEventListener('click', cardTurnEvent);
  };

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
  console.log(gameState.flippedCards)
  flippedCardsLengthCheck();
};

/** ---------- FLIPPED CARDS ARRAY (LENGTH-CHECK) ----------
 * Ellenőrzi a 'flippedCards' tömbjének hosszát
 * Ha a tömb hossza 2, akkor:
 * eltávolítja az összes kártyafordító eseményfigyelöt (hogy egyszerre 2-nél több kártya ne fordulhasson fel)
 * meghívja a 'flippedCardsValuesCheck' függvényt
 * majd kiüríti a 'flippedCards' tömböt
 *
 * @returns {void}
 * @version 1.0.0
 */
function flippedCardsLengthCheck() {
  if ( gameState.flippedCards.length === 2 ) {
    
    const allCards = document.querySelectorAll('.cards');
    allCards.forEach(card => {
      card.removeEventListener('click', cardTurnEvent);
    });
    
    flippedCardsValuesCheck();
    gameState.flippedCards = [];
  };
};



/** ---------- FLIPPED CARDS ARRAY (VALUES-CHECK) ----------
 * ellenőrzi hogy a megfordított kártyák értékei megegyeznek-e
 * ha igen akkor:
 * a megtalált kártyapárok osztályait 'done'-ra cseréli
 * meghívja a 'pairsFoundCounter' függvényt
 * visszaadja a kártyafordító eseménykezelöket
 * ha nem akkor:
 * megadott idöintervallum után az összes aktív kártya visszafordul az eredeti hátoldalára
 * 
 * @returns {void}
 * @version 1.0.0
 */
function flippedCardsValuesCheck() {
  if (gameState.flippedCards[0] === gameState.flippedCards[1]) {
    const activeCards = document.querySelectorAll('.active-card');
    activeCards.forEach(card => {
      card.classList.replace('active-card', 'done');
    });
    console.log(gameState.flippedCards);
    pairsFoundCounter();
    cardActions();
  }
  else {
    setTimeout(() => {
      const activeCards = document.querySelectorAll('.active-card');
      activeCards.forEach(card => {
        card.classList.replace('active-card', 'inactive-card');
        card.src = `./src/assets/cards/cardBack${gameState.cardColor}.svg`;
      });
      cardActions();
    }, 500);
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