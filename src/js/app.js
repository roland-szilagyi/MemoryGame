/* ---------- OPTIONS DATA EXTRACTION ---------- */

/**
 * kinyeri a kiválasztott rádiógombok értékeit
 * konvertálja az értékeket a megfelelö adattípusra
 * belerakja az értékeket egy tömbe 'array'
 * @param Values from DOM elements
 */
function getOptionsValues() {
  let array = [];
  document.querySelector(".js-btn-start").addEventListener("click", function() {
    array.push(Number(document.querySelector('input[name="stackSize"]:checked')?.value));
    array.push(Number(document.querySelector('input[name="difficult"]:checked')?.value));
    array.push(Boolean(document.querySelector('input[name="cardColor"]:checked')?.value));

    return array;
  });
};

/* ---------- CARD NUMBER OPERATIONS ---------- */

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
  return cardNumbers;
};

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
  return cardShuffled;
};

function cardRender() {

};