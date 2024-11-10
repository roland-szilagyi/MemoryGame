import { gameState } from "./app.js";

/** ---------- SAVING OPTIONS VALUES ----------
 * Változókba menti a kiválasztott rádiógombok értékeit
 * Konvertálja az értékeket a megfelelő adattípusra
 * Visszaad egy objektumot az értékekkel */

export function getOptionsValues() {
  const stackSize = Number(document.querySelector('input[name="stackSize"]:checked')?.value);
  const difficult = Number(document.querySelector('input[name="difficult"]:checked')?.value);
  const timeRem = Number(document.querySelector('input[name="difficult"]:checked')?.value);
  const cardColor = document.querySelector('#blue').checked ? 'Blue' : 'Red';
  const flippedCards = [];
  const pairsFound = 0;
  const score = 0;

  return { stackSize, difficult, cardColor, flippedCards, pairsFound, timeRem, score };
};

/** ---------- GENERATING AND SHUFFLING CARD VALUES ----------
 * Legenerálja a kártyaértékeket A 'stacksize' alapján
 * Megduplázza a generált számokat
 * Megkeveri a megduplázott számokat */

export function generateCardNumbers() {
  let cardNumbers = [];
  for (let i = 1; i <= gameState.stackSize / 2; i++) {
    cardNumbers.push(i);
    cardNumbers.push(i);
  }
  let cardShuffled = cardNumbers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return { shuffledCards: cardShuffled };
  // { shuffledCards: [3, 1, 4, 2, 5, 3, 4, 1, 5, 2] }
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