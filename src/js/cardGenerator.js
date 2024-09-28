import { gameState } from "./app.js";

/** ---------- SAVING OPTIONS VALUES ----------
 * változókba menti a kiválasztott rádiógombok értékeit
 * konvertálja az értékeket a megfelelő adattípusra
 * visszaad egy objektumot az értékekkel
 * 
 * @return {Object}
 * @property {number} stackSize - a kártyapakli mérete
 * @property {number} difficult - a kiválasztott nehézségi szint
 * @property {string} cardColor - a kiválasztott kártya szín
 * @version 1.0.0
 */
export function getOptionsValues() {
  const stackSize = Number(document.querySelector('input[name="stackSize"]:checked')?.value);
  const difficult = Number(document.querySelector('input[name="difficult"]:checked')?.value);
  const cardColor = document.querySelector('#blue').checked ? 'Blue' : 'Red';

  return { stackSize, difficult, cardColor };
};

/** ---------- GENERATING AND SHUFFLING CARD VALUES ----------
 * legenerálja a kártyaértékeket A 'STACKSIZE' alapján
 * megduplázza a generált számokat
 * megkeveri a megduplázott számokat
 * 
 * @return {Object}
 * @property {Array<number>} shuffledCards - a megkevert kártyaértékek
 * @version 1.0.0
 */
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
};

/** ---------- RENDERING CARDS ----------
 * 'img' elemek generálása a megkevert értékekböl
 * kártyaszín kiválasztása a 'cardColor' érték alapján
 * 
 * @param {Array<number>} shuffledCards - a kirenderelendő megkevert kártyaértékek
 * @param {string} cardColor - a kártya hátlapjának színe (Kék vagy Piros)
 * @return {void}
 * @version 1.0.0
 */
export function renderCards() {
  let cardsCont = document.querySelector('.js-cards-cont');
  let cardColor = gameState.cardColor;

  cardsCont.innerHTML = '';
  gameState.shuffledCards.forEach(cardValue => {
    cardsCont.innerHTML += `<img src="./src/assets/cards/cardBack${cardColor}.svg" data-card-id="${cardValue}" alt="card" class="cards js-card">`;
  });
};