const percent = document.querySelector('p');
const button = document.querySelector('button');
let isClicked = false;
let loadingNumber = 100;

button.addEventListener('click', (e) => {
  if (!isClicked) {
    isClicked = !isClicked;

    let loadingBackwards = setInterval(() => {
      if (loadingNumber === 0) {
        clearInterval(loadingBackwards);
      }

      percent.innerHTML = `${loadingNumber}%`;
      loadingNumber--;
    }, 100);
  }
});
