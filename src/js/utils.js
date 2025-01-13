import { gameState } from "./app.js";
import { stopTimer } from "./timer.js";
import { cardTurnEvent } from "./gamePlay.js";

/** ---------- INCREASING FOUND PAIRS ----------
 * A függvény növeli a 'pairsFound' globális állapot értékét 1-el */

export function pairsCounter() {
  gameState.pairsFound += 1;
  console.log(gameState.pairsFound);
};

/** ---------- CHECK IF GAME IS OVER ----------
 * A függvény ellenőrzi, hogy véget ért-e a játék */

export function isGameOver() {
  if (gameState.stackSize === gameState.pairsFound * 2) {
    console.log('Játék vége. Megtaláltad az összes párt!');
    stopTimer();
  }
};

/** ---------- CARD TURN EVENT REMOVER ----------
 * A függvény törli a kattinthatóságot a kártyákról */

export function cardTurnEventRemover() {
  const allCards = document.querySelectorAll('.cards');
    allCards.forEach(card => {
      card.removeEventListener('click', cardTurnEvent);
    });
};

export function popup() {
  let form = document.querySelector('.js-popup__congrats');
  form.classList.remove('hidden');
};