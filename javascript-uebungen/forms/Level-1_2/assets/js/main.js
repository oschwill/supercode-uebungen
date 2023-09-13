/*CONTAINER */
const output = document.querySelector('.output');

function calculateAge() {
  event.preventDefault();
  let date = document.querySelector('#date').value;
  let yearLength = 24 * 3600 * 365.25 * 1000;

  /* Zeit berechnen */
  let ageDif = Math.floor((new Date() - new Date(date).getTime()) / yearLength);

  output.innerHTML = ageDif;
}
