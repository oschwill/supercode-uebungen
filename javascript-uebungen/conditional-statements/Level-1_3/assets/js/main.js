const output = document.querySelector('.output');
const fullAge = 18;

function greaterThan() {
  event.preventDefault();

  if (document.getElementById('input').value >= fullAge) {
    output.innerText = 'Ja, Du kannst Shisha rauchen';
  } else {
    output.innerText = 'Du darfst noch nicht Shisha rauchen';
  }
}
