const submit = document.querySelector('#button');
const body = document.querySelector('body');
const select = document.querySelector('select');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  body.style.backgroundColor = select.value;
});
