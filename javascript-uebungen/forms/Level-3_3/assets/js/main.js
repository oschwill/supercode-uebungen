/* CONTAINER */
const mainContainer = document.querySelector('main');
/* DATA */
const colorPicker = [0, 33, 66, 100];

function changeBackground() {
  const redRange = document.querySelector('#red').value;
  const greenRange = document.querySelector('#green').value;
  const blueRange = document.querySelector('#blue').value;

  mainContainer.style.backgroundColor = `rgb(${colorPicker[redRange]}%,${colorPicker[greenRange]}%,${colorPicker[blueRange]}%)`;
}
