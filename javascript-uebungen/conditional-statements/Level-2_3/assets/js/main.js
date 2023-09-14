const output = document.querySelector('.result');
const diffNum = 27;
let result = 0;

const calculateDiff = () => {
  let number = Number(document.querySelector('#num').value);

  if (isNaN(number) || number === null) {
    output.innerText = 'is not a number!';
    return;
  }

  result = number - diffNum;

  if (number > diffNum) {
    result *= 2;
  }

  output.innerText = result;

  console.log(output.innerText);
};
