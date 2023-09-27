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
    returnArr.push('o');
  }

  returnArr.push('p');

  output.innerText = returnArr.join('');
});
