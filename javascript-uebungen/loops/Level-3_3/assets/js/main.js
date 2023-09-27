const form = document.querySelector('.form');
const output = document.querySelector('.output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputVal = Number(document.querySelector('.input').value);
  let returnArr = ['L'];

  if (!inputVal) {
    alert('Geben Sie eine Zahl ein!!!');
    return;
  }

  for (let i = 0; i < inputVal; i++) {
    inputVal % 2 === 0
      ? returnArr.push('o')
      : i % 2 === 0
      ? returnArr.push('o')
      : returnArr.push('0');
  }

  returnArr.push('p');

  output.innerText = returnArr.join('');
});
