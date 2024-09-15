import { getOptionsValues } from './script.js';

/* ---------- ÁLLAPOT ---------- */

let gameState = {
  stackSize: 9,
  difficult: 2,
  cardColor: true,
  flippedCards: [],
  pairsFound: 0
};

/* ---------- ÁLLAPOT FRISSÍTÉSE ---------- */

function updateGameState(updatedValues) {
  Object.assign(gameState, updatedValues);
  console.log("Updated gameState:", gameState);
};


/* ---------- GAME LOOP ---------- */

function gameLoop() {
  getOptionsValues();
  updateGameState();
};

gameLoop();