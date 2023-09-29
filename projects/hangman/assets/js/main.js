/* CONTAINER */
const form = document.querySelector('.form');
const buttons = document.querySelectorAll('.buttons button');
const difficulty = document.querySelector('#difficulty');
const startGame = document.querySelector('.start-game');
const errorStartGame = document.querySelector('.error-arrow');
const chooseDiffSuccess = document.querySelector('.thumb-up');
const gameMenu = document.querySelector('aside');
const tries = document.querySelector('.trys');
const displayGuess = document.querySelector('.display');

/* PROPERTIES */
let diffMode = '';
let rndWord = '';
let maxTries = 0;
let actualTry = 0;
let outputHashedWord = [];

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

/* FUNCTIONS */
const run = (diff) => {
  rndWord = getRandomWord(words).toUpperCase();

  switch (diff) {
    case 'easy_peasy':
      maxTries = String(Math.pow(10, 1000)).toUpperCase();
      break;
    case 'normal':
      maxTries = Math.round(rndWord.length + rndWord.length / 2);
      break;
    case 'hard':
      maxTries = rndWord.length;
      break;
    case 'impossible':
      maxTries = Math.round(rndWord.length / 2);
      break;
    default:
      alert('Ein Fehler ist aufgetreten!! Restarten Sie die Seite!');
      break;
  }

  // INITIAL TRYS
  tries.innerText = `TRIES: ${actualTry} OF ${maxTries}`;

  // INITIAL HASHED WORD
  outputHashedWord = Array.from('_'.repeat(rndWord.length));
  displayGuess.innerHTML = outputHashedWord.join('');
};

const clickButton = (e) => {
  actualTry++;
  // OUTPUT TRIES
  tries.innerText = `TRIES: ${actualTry} OF ${maxTries}`;

  // DISABLE BUTTON
  e.target.disabled = true;
  e.target.classList.remove('button-hover');

  // CHECK CLICKED CHAR IN RNDWORD
  let charVal = e.target.value;

  let foundIndex = rndWord.split('').reduce((a, e, i) => {
    if (e === charVal) a.push(i);
    return a;
  }, []);

  console.log(foundIndex);

  // CHECK IF CHAR IS CORRECT!
  if (foundIndex.length > 0) {
    foundIndex.forEach((i) => {
      outputHashedWord[i] = `<span class="new-char-income">${charVal}</span>`;
    });
    // DISPLAY WORD
    displayGuess.innerHTML = outputHashedWord.join('');

    // CHECK IF WON
    if (outputHashedWord.indexOf('_') === -1) {
      // WON GAME...
    }
    outputHashedWord.indexOf('_');
  }

  // CHECK IF LOST!
  if (actualTry === maxTries) {
    //... LOST GAME!
    alert('GAME IS OVER?!');
  }
};

function getRandomWord(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/* EVENT LISTENER */
// START GAME
startGame.addEventListener('click', (e) => {
  diffMode = difficulty.value;
  if (diffMode === '') {
    errorStartGame.style.display = 'block';
    difficulty.classList.add('error');
    return;
  }

  // GAME MENU AUSBLENDEN
  gameMenu.style.display = 'none';

  // RUN GAME
  run(diffMode);
});

// CHANGE DIFFICULTY
difficulty.addEventListener('change', (e) => {
  diffMode = difficulty.value;
  if (diffMode !== '') {
    chooseDiffSuccess.style.display = 'block';
    errorStartGame.style.display = 'none';
    difficulty.classList.remove('error');
  } else {
    chooseDiffSuccess.style.display = 'none';
    errorStartGame.style.display = 'block';
    difficulty.classList.add('error');
  }
});

// INGAME BUTTONS
buttons.forEach((b) => {
  b.addEventListener('click', clickButton);
});
