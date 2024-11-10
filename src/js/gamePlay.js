import { gameState } from './app.js';
import { isGameOver, pairsCounter, scoreCounter } from './utils.js';

/** ---------- GAME PLAY KOMPLEX ----------
 * Ez egy komplex függvény ami egymás után hívja meg a kártyalogika függvényeit
 * Inicializálja a kártyafordítás eseményfigyelőit
 * Minden kártyához ('.js-card' elemekhez) hozzárendeli a kattintás eseményfigyelőt, amely a 'cardTurner' függvényt hívja meg a kártya fordításához */

export function gamePlay() {
  let cards = document.querySelectorAll('.inactive-card');
  cards.forEach(card => {
    card.addEventListener('click', cardTurnEvent)
  });
};

/** ---------- CARD TURN EVENT ----------
 * Kártyára való kattintáskor ha a kártya és párja még nem lett megtalálva ('done'):
 * Kicseréli a kártya képét a kattintott kártya ID-je alapján
 * Kicseréli az 'inactive-card' osztályt 'active-card'-ra
 * Eltávolítja az eseményfigyelőt, hogy ne lehessen újra megfordítani
 * Meghívja a 'pushToFlippedCards' függvényt a 'cardId' attributummal */

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
 * Hozzáadja a megfordított kártya azonosítóját a 'flippedCards' tömbhöz és ellenőrzi a tömb hosszát
 * A kártya azonosítóját ('cardId') hozzáfűzi a 'gameState.flippedCards' tömbhöz
 * Meghívja 'flippedCardsLengthCheck' függvényt */

function pushToFlippedCards(value) {
  gameState.flippedCards.push(value);
  console.log(gameState.flippedCards)
  flippedCardsLengthCheck();
};

/** ---------- FLIPPED CARDS ARRAY (LENGTH-CHECK) ----------
 * Ellenőrzi a 'flippedCards' tömbjének hosszát
 * Ha a tömb hossza 2, akkor:
 * Eltávolítja az összes kártyafordító eseményfigyelöt (hogy egyszerre 2-nél több kártya ne fordulhasson fel)
 * Meghívja a 'flippedCardsValuesCheck' függvényt
 * Majd kiüríti a 'flippedCards' tömböt */

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
 * Ellenőrzi hogy a megfordított kártyák értékei megegyeznek-e
 * Ha igen akkor:
 * A megtalált kártyapárok osztályait 'done'-ra cseréli
 * Meghívja a 'pairsFoundCounter' függvényt
 * Meghívja a 'isGameOver' függvényt
 * Visszaadja a kártyafordító eseménykezelőket
 * Ha nem akkor:
 * Megadott időintervallum után az összes aktív kártya visszafordul az eredeti hátoldalára */

function flippedCardsValuesCheck() {
  if (gameState.flippedCards[0] === gameState.flippedCards[1]) {
    const activeCards = document.querySelectorAll('.active-card');
    activeCards.forEach(card => {
      card.classList.replace('active-card', 'done');
    });
    console.log(gameState.flippedCards);
    pairsCounter();
    scoreCounter(gameState);
    isGameOver();
    gamePlay();
  }
  else {
    setTimeout(() => {
      const activeCards = document.querySelectorAll('.active-card');
      activeCards.forEach(card => {
        card.classList.replace('active-card', 'inactive-card');
        card.src = `./src/assets/cards/cardBack${gameState.cardColor}.svg`;
      });
      gamePlay();
    }, 500);
  };
};