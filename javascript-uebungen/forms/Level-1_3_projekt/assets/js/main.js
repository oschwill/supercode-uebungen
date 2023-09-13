let result = 0;
/* CONTAINER */
const output = document.querySelector('.output');

function calculate(calculateType, num) {
  num = Number(num);
  switch (calculateType) {
    case '+':
      result += num;
      break;
    case '-':
      result -= num;
      break;
    case '*':
      result *= num;
      break;
    default:
      result = 0;
      break;
  }

  output.innerHTML = result;
}
