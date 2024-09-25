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