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

  pushToFlippedCards(cardId);
};

/* ---------- KÁRTYA ÉRTÉK PUSHOLÓ ---------- */
export function pushToFlippedCards(cardId) {
  let flippedCardsArray = gameState.flippedCards;
  flippedCardsArray.push(cardId);
  console.log(gameState.flippedCards);
  console.log(gameState.flippedCards.leng);

  flippedCardsCheck();
};

/* ---------- MEGFORDÍTOTT KÁRTYÁK TÖMB ELLENÖRZÉSE ---------- */
export function flippedCardsCheck() {
  let flippedCardsArray = gameState.flippedCards;
  if (flippedCardsArray.length !== 2) {
    console.log('Még nincs benne 2');
  } else if (flippedCardsArray.length === 2) {
    console.log("Ez 2");
    gameState.flippedCards = [];

    if ( flippedCardsArray[0] === flippedCardsArray[1] ) {
      console.log('eltaláltad!')
    }
  }
};

/* ---------- KÁRTYA ÉRTÉK ÖSSZEHASONLÍTÓ ---------- */