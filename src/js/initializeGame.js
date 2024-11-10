import { gameState } from "./app.js";

/** ---------- SAVING OPTIONS VALUES ----------
 * Változókba menti a kiválasztott rádiógombok értékeit
 * Konvertálja az értékeket a megfelelő adattípusra */

export function getOptionsValues() {
  gameState.stackSize = Number(document.querySelector('input[name="stackSize"]:checked')?.value);
  gameState.difficult = Number(document.querySelector('input[name="difficult"]:checked')?.value);
  gameState.timeRem = Number(document.querySelector('input[name="difficult"]:checked')?.value);
  gameState.cardColor = document.querySelector('#blue').checked ? 'Blue' : 'Red';
  gameState.flippedCards = [];
  gameState.pairsFound = 0;
  gameState.score = 0;
};

/** ---------- GENERATING AND SHUFFLING CARD VALUES ----------
 * Legenerálja a kártyaértékeket A 'stacksize' alapján
 * Megduplázza a generált számokat
 * Megkeveri a megduplázott számokat */

export function genCardNumbers() {
  let cardNumbers = [];
  for (let i = 1; i <= gameState.stackSize / 2; i++) {
    cardNumbers.push(i);
    cardNumbers.push(i);
  }
  let cardShuffled = cardNumbers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  gameState.shuffledCards = cardShuffled;
};

/** ---------- RENDERING CARDS ----------
 * 'img' elemek generálása a megkevert értékekből
 * Kártyaszín kiválasztása a 'cardColor' érték alapján */

export function renderCards() {
  let cardsCont = document.querySelector('.js-cards-cont');
  let cardColor = gameState.cardColor;

  cardsCont.innerHTML = '';
  gameState.shuffledCards.forEach(cardValue => {
    cardsCont.innerHTML += `<img src="./src/assets/cards/cardBack${cardColor}.svg" data-card-id="${cardValue}" alt="card" class="cards  js-card  inactive-card">`;
  });
};