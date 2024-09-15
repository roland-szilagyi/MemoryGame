/* ---------- OLDALAK VÁLTÁSA ---------- */
/**
 * oldalt vált a megadott paraméterek alapján
 * @param .js-classes
 */

export function pageSelect(removeClass, addClass) {
  document.querySelectorAll(removeClass).forEach(element => element.classList.remove('active')); // elveszi az összes active-ot.
  document.querySelectorAll(addClass).forEach(element => element.classList.add('active')); // hozzaadja az active-ot az összes megadott-hoz.
};

/* ---------- OPTIONS ÉRTÉKEK RÖGZÍTÉSE ---------- */
/**
 * változókba menti a kiválasztott rádiógombok értékeit
 * konvertálja az értékeket a megfelelő adattípusra
 * belerakja az értékeket egy tömbbe 'array'
 * @return Array[number, number, boolean]
 */
export function getOptionsValues() {
  const stackSize = Number(document.querySelector('input[name="stackSize"]:checked')?.value);
  const difficult = Number(document.querySelector('input[name="difficult"]:checked')?.value);
  const cardColor = Boolean(document.querySelector('input[name="cardColor"]:checked')?.value);

  return { stackSize, difficult, cardColor }
};

/* ---------- KÁRTYAÉRTÉKEK LEGENERÁLÁSA ---------- */
/**
 * legenerálja a kártyaértékeket 1-töl 13-ig
 * megduplázza a generált számokat
 * @param Array of '1' ... '13'
 */
export function generateCardNumbers(number) {
  let cardNumbers = [];
  for ( let i = 1; i <= number / 2; i++ ) {
    cardNumbers.push(i);
    cardNumbers.push(i);
  };
  return cardNumbers;
};

/* ---------- KÁRTYAÉRTÉKEK MEGKEVERÉSE ---------- */
/**
 * megkeveri a megduplázott számokat
 * @param Array of shuffled numbers 
 */
export function cardShuffler(number) {
  let cardNumbers = generateCardNumbers(number);
  let cardShuffled = cardNumbers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    console.log(cardShuffled); // törölni kell
  return cardShuffled;
};