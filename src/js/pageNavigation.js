import { initializeGame } from './app.js';
/* ---------- GOMBOK ESEMENYFIGYELÖI ---------- */

export function pageNavigationEvents() {
  document.querySelector('.js-btn-next').addEventListener('click', function() {
    pageNavigation('.js-home', '.js-options');
  });
  
  document.querySelector('.js-btn-start').addEventListener('click', function() {
    initializeGame(); /* --- JÀTÉK INDÍTÁSA --- */
    pageNavigation('.js-options', '.js-game');
  });
  
  document.querySelector('.js-btn-stop').addEventListener('click', function() {
    pageNavigation('.js-game', '.js-options');
  });
  
  document.querySelector('.js-btn-home').addEventListener('click', function() {
    pageNavigation('.js-options', '.js-home');
  });
};

/* ---------- OLDALAK VÁLTÁSA ---------- */
/**
 * oldalt vált a megadott paraméterek alapján,
 * az egyik elemből eltávolítja az 'active' osztályt
 * a másikhoz hozzáadja.
 * 
 * @param {string} removeClass - Az eltávolítandó elem osztálya.
 * @param {string} addClass - A hozzáadandó elem osztálya.
 */

export function pageNavigation(removeClass, addClass) {
  document.querySelectorAll(removeClass).forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  document.querySelectorAll(addClass).forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};