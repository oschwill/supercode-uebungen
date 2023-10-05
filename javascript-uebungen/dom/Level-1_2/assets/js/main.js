const allContainers = document.getElementsByClassName('example');
let isClicked = false;
let color = 'red';

const myFunction = () => {
  for (const elements of allContainers) {
    !isClicked ? (elements.style.backgroundColor = color) : (elements.style.backgroundColor = '');
  }

  isClicked = !isClicked;
};
