const output = document.querySelector('output');
const button = document.querySelectorAll('.unten');
const listItems = document.getElementById('myList');

// first Element
button[0].children[0].addEventListener('click', (e) => {
  output.innerHTML = listItems.firstElementChild.textContent;
});

button[0].children[2].addEventListener('click', (e) => {
  output.innerHTML = listItems.lastElementChild.textContent;
});

button[0].children[4].addEventListener('click', (e) => {
  output.innerHTML = listItems.firstElementChild.nextElementSibling.textContent;
});

button[0].children[6].addEventListener('click', (e) => {
  output.innerHTML = listItems.lastElementChild.previousElementSibling.textContent;
});
