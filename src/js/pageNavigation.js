import { initializeGame } from './app.js';

/** ---------- BUTTONS EVENTLISTENERS ----------
 * Inicializálja az eseményfigyelőket az oldal navigációs gombjaihoz és kezeli az oldalak közötti átmeneteket
 * - `.js-btn-next`: navigál a 'HOME' oldalról az 'OPTIONS' oldalra
 * - `.js-btn-start`: navigál az 'OPTIONS' oldalról a 'GAMETABLE' oldalra és elindítja a játékot
 * - `.js-btn-stop`: visszanavigál a 'GAMETABLE' oldalról az 'OPTIONS' oldalra és leállítja a játékot
 * - `.js-btn-home`: Visszanavigál az 'OPTIONS' oldalról a 'HOME' oldalra
 * 
 * @returns {void}
 * @version 1.0.0
 */

export function pageNavigationEvents() {
  document.querySelector('.js-btn-next').addEventListener('click', function() {
    pageNavigation('.js-home', '.js-options');
  });
  document.querySelector('.js-btn-start').addEventListener('click', function() {
    initializeGame(); /* --- GAME START --- */
    pageNavigation('.js-options', '.js-game');
  });
  document.querySelector('.js-btn-stop').addEventListener('click', function() {
    pageNavigation('.js-game', '.js-options');
  });
  document.querySelector('.js-btn-home').addEventListener('click', function() {
    pageNavigation('.js-options', '.js-home');
  });
};

/** ---------- OLDALAK VÁLTÁSA ----------
 * oldalak közötti navigációt kezel az osztályok cseréjével
 * az egyik elemből eltávolítja az 'active' osztályt
 * a másikhoz hozzáadja
 * 
 * @param {string} removeClass - Az eltávolítandó elem osztálya.
 * @param {string} addClass - A hozzáadandó elem osztálya.
 * @returns {void}
 * @version 1.0.0
 */

export function pageNavigation(removeClass, addClass) {
  document.querySelectorAll(removeClass).forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  document.querySelectorAll(addClass).forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};