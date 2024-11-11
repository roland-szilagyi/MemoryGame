import { gameState } from "./app.js";
import { stopTimer } from "./timer.js";

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
    stopTimer();
  }
};