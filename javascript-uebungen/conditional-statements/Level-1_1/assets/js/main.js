const output = document.querySelector('.output');
const fullAge = 18;

function adult() {
  let age = document.querySelector('#age').value;
  age = Number(age);

  if (age >= fullAge && !isNaN(age)) {
    output.innerText = 'Volljährig';
  } else if (age < fullAge && !isNaN(age)) {
    output.innerText = 'Minderjährig';
  } else {
    output.innerText = 'Bitte geben Sie eine Zahl ein!!!';
  }
}
