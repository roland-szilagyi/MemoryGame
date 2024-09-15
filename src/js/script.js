/* ---------- OPTIONS ÉRTÉKEK RÖGZÍTÉSE ---------- */

/**
 * Változókba menti a kiválasztott rádiógombok értékeit
 * Konvertálja az értékeket a megfelelő adattípusra
 * Belerakja az értékeket egy tömbbe 'array'
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
function generateCardNumbers() {
  let cardNumbers = [];
  for ( let i = 1; i <= 13; i++ ) {
    cardNumbers.push(i);
    cardNumbers.push(i);
  };
  console.log(cardNumbers); // törölni majd
  return cardNumbers;
};

/* ---------- KÁRTYAÉRTÉKEK MEGKEVERÉSE ---------- */

/**
 * megkeveri a megduplázott számokat
 * @param Array of shuffled numbers 
 */
function cardShuffler() {
  let cardNumbers = generateCardNumbers();
  let cardShuffled = cardNumbers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    console.log(cardShuffled); // törölni majd
  return cardShuffled;
};