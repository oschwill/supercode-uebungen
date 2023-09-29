const form = document.querySelector('.form');
const buttons = document.querySelectorAll('button');

const words = [
  'Abendbrot',
  'Brueckentag',
  'Erklaerungsnot',
  'Fingerspitzengefuehl',
  'Fremdschaemen',
  'Geborgenheit',
  'Geschmacksverirrung',
  'Schweinehund',
  'Kopfkino',
  'Kummerspeck',
  'Schnapsidee',
  'Torschlusspanik',
  'verabredet',
  'verschlimmbessern',
  'Vorfreude',
  'Weltschmerz',
  'Zeitgeist',
  'Zugzwang',
];
const clickButton = (e) => {
  console.log(e.target);
};

/* EVENT LISTNER */
buttons.forEach((b) => {
  b.addEventListener('click', clickButton);
});
