import { gameState } from "./app.js";

/** ---------- INCREASING SCORE ----------
 * A függvény növeli a 'score' értékét és frissíti a DOM-ot */

export function scoreCounter() {
  const scoreCounterElement = document.querySelector('.js-score');
  gameState.score += gameState.timeRem * 12;
  scoreCounterElement.innerText = gameState.score;
};

export function renderScore() {
  const scoreCounterElement = document.querySelector('.js-score');
  scoreCounterElement.innerText = gameState.score;
};