import { getOptionsValues, genCardNumbers, renderCards } from './initializeGame.js';
import { gamePlay } from './gamePlay.js';
import { startTimer, stopTimer } from './timer.js';
import { renderScore } from './score.js';

/** ---------- GLOBAL STATE ----------
 * A játék globális állapotát tároló objektum
 * Tartalma: kártyapakli méret, nehézségi szint, kártyák színe, aktuális megfordított kártya, megtalált párok száma, pontszám */

export let gameState = {
  stackSize: 0,
  difficult: 0,
  timeRem: 0,
  cardColor: '',
  flippedCards: [],
  pairsFound: 0,
  score: 0
};

/* ---------- GAME BUTTONS EVENTS ----------
 * Inicializálja az eseményfigyelőket az oldal navigációs gombjaihoz */

document.querySelector('.js-btn-start').addEventListener('click', buttonStart);
document.querySelector('.js-btn-stop').addEventListener('click', buttonStop);
document.querySelector('.js-btn-next').addEventListener('click', buttonNext);
document.querySelector('.js-btn-home').addEventListener('click', buttonHome);

/* ---------- SITES NAVIGATION FUNCTION ----------
 * Kezeli az oldalak közötti átmeneteket az osztályok cseréjével
 * elem1 -'active'
 * elem2 +'active' */

function navigation(removeClass, addClass) {
  document.querySelectorAll(removeClass).forEach(element => element.classList.remove('active'));
  document.querySelectorAll(addClass).forEach(element => element.classList.add('active'));
};

/* ---------- GAME BUTTONS ACTIONS ----------
 * Lefuttatja a játék különböző részeit */

function buttonStart() {
  navigation('.js-options', '.js-game');    // Megjeleníti az 'Options' oldalt
  getOptionsValues();                       // Mentésre kerülnek a kiválasztott beállítások az állapotba
  genCardNumbers();                         // Legenerálja és megkeveri a kártyák értékeit
  renderCards();                            // Rendereli a kártyákat az értékek alapján
  renderScore();                            // Rendereli a kezdő pontszámot a 'gameState.score' értéke alapján
  startTimer();                             // Elindítja a visszaszámlálót a 'gameState.timeRem' értéke alapján
  gamePlay();                               // Elindítja a komplex kártyalogikát (a játékot)
};

function buttonStop() {
  navigation('.js-game', '.js-options');
  stopTimer();
};

function buttonNext() {
  navigation('.js-home', '.js-options');
};

function buttonHome() {
  navigation('.js-options', '.js-home');
};