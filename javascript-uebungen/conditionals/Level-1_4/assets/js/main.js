const output = document.querySelector('.output');
const submit = document.querySelector('.submit');

const saveLength = 8;

submit.addEventListener('submit', () => {
  event.preventDefault();
  let pw = document.querySelector('#password').value;
  output.innerHTML =
    pw.length >= saveLength
      ? '<p class="output" style="color: green;">Welcome to your Account</p>'
      : '<p class="output" style="color: red;">The password is to short</p>';

  output.innerText = returnString;
});
