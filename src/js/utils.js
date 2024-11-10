import { gameState } from "./app.js";

/** ---------- INCREASING FOUND PAIRS ----------
 * A függvény növeli a 'pairsFound' globális állapot értékét 1-el */

export function pairsCounter() {
  gameState.pairsFound += 1;
  console.log(gameState.pairsFound);
};

/** ---------- CHECK IF GAME IS OVER ----------
 * A függvény ellenőrzi, hogy véget ért-e a játék
 * Ha igen: Felugrik egy ablak */

export function isGameOver() {
  if (gameState.stackSize === gameState.pairsFound * 2) {
    console.log('Játék vége. Megtaláltad az összes párt!');
  }
};

/** ---------- INCREASING SCORE ----------
 * A függvény növeli a 'score' értékét és frissíti a DOM-ot */

export function scoreCounter(value) {
  const scoreCounterElement = document.querySelector('.js-score');
  value.score += value.timeRem * 12;
  scoreCounterElement.innerText = value.score;
};