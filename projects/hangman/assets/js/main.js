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
const lostMessage = document.querySelector('nav .lost-message');

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

  // CHECK IF CHAR IS CORRECT!
  if (foundIndex.length > 0) {
    let rndClass = `new-char-income${(Date.now() * Math.random()).toFixed(0)}`;

    foundIndex.forEach((i) => {
      outputHashedWord[
        i
      ] = `<span class="${rndClass}" style="display: inline-block;">${charVal}</span>`;
    });

    // DISPLAY WORD
    displayGuess.innerHTML = outputHashedWord.join('');
    let getNewCharElements = document.querySelectorAll(`.${rndClass}`);

    getNewCharElements.forEach((val) => {
      val.animate(
        {
          transform: ['scale(1)', 'scale(1.2)', 'scale(1)'],
          color: ['black', 'red', 'black'],
        },
        500
      );
    });

    // CHECK IF WON
    if (outputHashedWord.indexOf('_') === -1) {
      buttons.forEach((b) => {
        b.disabled = true;
        b.classList.remove('button-hover');
      });

      displayGuess.style.color = 'lightgreen';

      displayGuess.animate(
        {
          transform: ['scale(1.35)', 'translateY(-75%)'],
          color: ['darkgreen', 'lightgreen', 'darkgreen'],
        },
        5000
      );

      new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
        displayGuess.innerHTML = 'YOU HAVE WON THE MATCH<br/>';
        displayGuess.style.backgroundColor = 'rgba(0,0,0,0.25';
        displayGuess.insertAdjacentHTML(
          'beforeend',
          `<button class="restart-game">Restart</button>`
        );

        createRestartEvent();
      });

      return;
    }
  }

  // CHECK IF LOST!
  if (actualTry === maxTries) {
    checkLooseStatus();
    return;
  }
};

const getRandomWord = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const checkLooseStatus = async () => {
  lostMessage.style.display = 'flex';

  // 3 sekunden warten
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // erzeuge nach 3 Sekunden den Button!
  lostMessage.insertAdjacentHTML('beforeend', '<button class="restart-game">Restart</button>');
  createRestartEvent();
};

const createRestartEvent = () => {
  let restart = document.querySelector('.restart-game');
  restart.addEventListener('click', (e) => location.reload());
};

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
