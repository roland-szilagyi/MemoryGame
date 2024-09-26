import { gameState } from './app.js';

/* ---------- KÁRTYA FORDÍTÁS ESEMÉNYFIGYELÖI ---------- */
export function cardActions() {
  let cards = document.querySelectorAll('.js-card');
  cards.forEach(card => {
    card.addEventListener('click', cardTurner)
  });
};

/* ---------- KÁRTYA FORDÍTÓ ---------- */
export function cardTurner(event) {
  const clickedCard = event.target;
  const cardId = clickedCard.dataset.cardId;
  clickedCard.src = `./src/assets/cards/${cardId}.svg`;

  clickedCard.removeEventListener('click', cardTurner);
  pushToFlippedCards(cardId);
};

/* ---------- MEGFORDÍTOTT KÁRTYÁK TÖMB (PUSH) ---------- */
export function pushToFlippedCards(cardId) {
  let flippedCardsArray = gameState.flippedCards;
  flippedCardsArray.push(cardId);
  console.log(gameState.flippedCards);
  console.log(gameState.flippedCards.leng);

  flippedCardsLengthCheck();
};

/* ---------- MEGFORDÍTOTT KÁRTYÁK TÖMB (HOSSZ-ELLENÖRZÉS) ---------- */
export function flippedCardsLengthCheck() {
  let flippedCardsArray = gameState.flippedCards;
  if ( flippedCardsArray.length === 2 ) {
    flippedCardsValuesCheck();
    gameState.flippedCards = [];
  }
};

/* ---------- MEGFORDÍTOTT KÁRTYÁK TÖMB (EGYEZÉS-ELLENÖRZÉS) ---------- */
export function flippedCardsValuesCheck() {
  let flippedCardsArray = gameState.flippedCards;
  if ( flippedCardsArray[0] === flippedCardsArray[1] ) {
    console.log(flippedCardsArray)
    console.log('eltaláltad!');
  }
};

/* ---------- EVENT TÖRLÉSE ---------- */
export function eventRemover() {

};