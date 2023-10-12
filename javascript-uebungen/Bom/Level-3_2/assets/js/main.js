const input = document.querySelector('#minutes');
const startButton = document.querySelector('button:first-of-type');
const pauseButton = document.querySelectorAll('button')[1];
const resetButton = document.querySelector('button:last-of-type');
const outputTime = document.getElementById('time');

let isPaused = false;
let isStarted = false;
let milliSecond = 1000;

let timer;

startButton.addEventListener('click', (e) => {
  // Hole Number aus input feld
  let value = input.value;
  // wir setten die pause auf false
  isPaused = false;

  if (!isStarted) {
    if (isNaN(value) || value === '' || value > 60) {
      // Do Nothing
      return;
    } else {
      isStarted = true;
      // wir holen uns einmalig die aktuelle Zeit
      let now = new Date().getTime();

      // Wir holen uns die aktuelle zeit
      let countdown = new Date();
      // Wir rechnen die Minuten auf die aktuelle Zeit
      countdown.setTime(countdown.getTime() + value * 60 * 1000);

      // Start counter Output
      outputTime.innerText = `${('0' + value).slice(-2)}:00`;
      // disabled input nach start
      input.disabled = true;

      timer = setInterval(() => {
        if (!isPaused) {
          now += milliSecond; // wir rechnen die Sekunden auf now
          let timeDiff = countdown - now; // wir errechnen die Differenz

          // Wir resetten den Timer wieder
          if (timeDiff < milliSecond) {
            resetFunction();
          }

          // minutes und sekunden errechnen!
          let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

          outputTime.innerText = `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
        }
      }, milliSecond);
    }
  }
});

pauseButton.addEventListener('click', () => (isPaused = true));
resetButton.addEventListener('click', () => resetFunction());

const resetFunction = () => {
  // Wir resetten alles und setzten den startbool auf false
  isStarted = false;
  // wir clearn den timer
  clearInterval(timer);
  // wir clearn das input feld
  input.value = '';
  // wir enablen wieder das input feld
  input.disabled = false;
  // Wir setten die output time wieder auf 00:00
  outputTime.innerText = '00:00';
};
