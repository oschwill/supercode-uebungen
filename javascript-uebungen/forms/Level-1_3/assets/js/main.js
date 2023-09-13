/* CONTAINERS */
const output = document.querySelector('.output');

function compareAge() {
  event.preventDefault();
  let ageOne = Number(document.querySelector('#age_one').value);
  let ageTwo = Number(document.querySelector('#age_two').value);

  output.innerHTML = ageOne >= ageTwo ? ageOne - ageTwo : ageTwo - ageOne;
}
