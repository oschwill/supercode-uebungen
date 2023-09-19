const output = document.querySelector('.output');
const submit = document.querySelector('.submit');
const legalAge = 18;

submit.addEventListener('submit', () => {
  event.preventDefault();
  let ageVal = document.querySelector('#age').value;

  let returnString = ageVal >= legalAge ? '18 or over 18' : 'under 18';
  output.innerText = returnString;
});
