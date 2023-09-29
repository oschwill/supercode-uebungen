const clickMe = document.querySelector('#clickMe');
let clickCounter = 0;

clickMe.addEventListener('click', (e) => {
  clickMe.innerText = `Click me: ${++clickCounter}`;
});
