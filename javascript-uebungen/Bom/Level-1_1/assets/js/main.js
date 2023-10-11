let text = 'Start warte 3 Sekunden!';
let timerCounter = 10;

console.log(text);
setTimeout(() => {
  text = 'erledigt, du hast 3 Sekunden verschwendet!';
  console.log(text);
}, 3000);

const timer = setInterval(() => {
  if (timerCounter === 0) {
    clearInterval(timer);
  }

  let now = new Date();

  let h = ('0' + now.getHours()).slice(-2);
  let m = ('0' + now.getMinutes()).slice(-2);
  let s = ('0' + now.getSeconds()).slice(-2);

  console.log(`${h}:${m}:${s}`);
  console.log(timerCounter);

  timerCounter--;
}, 1000);
