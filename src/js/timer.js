import { gameState } from "./app.js";

let timer;

/** ---------- START TIMER ----------
 * A visszaszámláló elindítása és frissítése */

export function startTimer() {
  timer = setInterval(renderTime, 1000);

  function renderTime() {
    const timeCounter = document.querySelector('.js-time');
    let hour = Math.floor(gameState.timeRem / 3600);
    let minute = Math.floor((gameState.timeRem - hour * 3600) / 60);
    let seconds = gameState.timeRem - (hour * 3600 + minute * 60);

    if (minute < 10) {
      minute = "0" + minute;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    gameState.timeRem -= 1;
    timeCounter.innerText = minute + ":" + seconds;
  };

  renderTime();
};

/** ---------- STOP TIMER ----------
 * A visszaszámláló leállítása */

export function stopTimer() {
  clearInterval(timer);
};