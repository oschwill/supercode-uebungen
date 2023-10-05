const wrapper = document.querySelector('.umwickeln');
const button = document.querySelector('button');

let counter = 0;

button.addEventListener('click', (e) => {
  const newEl = document.createElement('div');

  if (counter % 10 === 0) {
    newEl.classList.add('weiss');
  } else {
    newEl.classList.add('rechteck');
  }
  newEl.textContent = counter;
  wrapper.appendChild(newEl);

  counter++;
});
