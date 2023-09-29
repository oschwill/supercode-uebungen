const select = document.querySelector('#select');
const output = document.querySelector('p');

select.addEventListener('change', (e) => {
  let val = e.target.value;

  output.innerText = `Sie haben ausgewählt ${val}`;
});
