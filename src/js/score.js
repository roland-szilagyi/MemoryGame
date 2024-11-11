import { gameState } from "./app.js";

/** ---------- INCREASING SCORE ----------
 * A függvény növeli a 'score' értékét és frissíti a DOM-ot */

export function scoreCounter() {
  const scoreCounterElement = document.querySelector('.js-score');
  const difficultyMultipliers = {
    20: 3,    // Nehezebb szint, magasabb szorzó
    30: 2,    // Közepes szint, közepes szorzó
    40: 1     // Könnyebb szint, alap szorzó
  };
  const stackSizeMultipliers = {
    14: 3,    // Nagyobb stack, magasabb szorzó
    10: 2,    // Közepes stack, közepes szorzó
    6: 1      // Kis stack, alap szorzó
  };

  const difficultyLevel = gameState.difficult;
  const stackSize = gameState.stackSize;
  const points = gameState.timeRem * difficultyMultipliers[difficultyLevel] * stackSizeMultipliers[stackSize];

  gameState.score += Math.round(points);
  scoreCounterElement.innerText = gameState.score;
};

export function renderScore() {
  const scoreCounterElement = document.querySelector('.js-score');
  scoreCounterElement.innerText = gameState.score;
};