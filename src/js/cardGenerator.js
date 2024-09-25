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
  const colorIsBlue = document.querySelector('#blue').checked;

  let cardColor;
  if (colorIsBlue) {
    cardColor = 'Blue';
  } else {
    cardColor = 'Red';
  };
  return { stackSize, difficult, cardColor };
};

/* ---------- KÁRTYAÉRTÉKEK LEGENERÁLÁSA ÉS MEGKEVERÉSE ---------- */
/**
 * legenerálja a kártyaértékeket 1-töl 13-ig
 * megduplázza a generált számokat
 * megkeveri a megduplázott számokat
 * @param Array of '1' ... '13'
 * @return Array of shuffled numbers 
 */
export function generateCardNumbers(number) {
  let cardNumbers = [];
  for ( let i = 1; i <= number / 2; i++ ) {
    cardNumbers.push(i);
    cardNumbers.push(i);
  };
  let cardShuffled = cardNumbers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
    console.log(cardShuffled); // törölni kell
  return cardShuffled;
};

/* ---------- KÁRTYÁK RENDERELÉSE ---------- */
/**
 * a megkevert számokat behelyettesítve legenerálja html-ben az 'img' elemeket
 * A 'cardColor' értéke alapján generálja a megfelelö kártyaszínt
 * @param Array of 
 */
export function renderCards(shuffledCards, cardColor) {
  let cardsCont = document.querySelector('.js-cards-cont');
  cardsCont.innerHTML = '';
  shuffledCards.forEach(cardValue => {
    cardsCont.innerHTML += `<img src="./src/assets/cards/cardBack${cardColor}.svg" data-card-id="${cardValue}" alt="card" class="cards js-card">`;
  });
};