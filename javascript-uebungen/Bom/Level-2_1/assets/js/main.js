const message = document.getElementsByClassName('message');
const count = document.getElementById('count');
let countNumber = Number(count.innerText);

const timer = setInterval(() => {
  countNumber--;
  count.innerText = countNumber;

  if (countNumber === 0) {
    message[0].style.opacity = '0';

    clearInterval(timer);
  }
}, 1000);
