const output = document.querySelector('.output');

function doubleMe() {
  event.preventDefault();
  const result = document.querySelector('#num').value * 2;
  output.innerHTML = result;
}
