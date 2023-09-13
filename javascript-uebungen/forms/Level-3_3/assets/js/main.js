/* CONTAINER */
const mainContainer = document.querySelector('main');
/* DATA */
const colorPicker = {
  red: [0, 33, 66, 100],
  green: [0, 33, 66, 100],
  blue: [0, 33, 66, 100],
};

function changeBackground() {
  const redRange = document.querySelector('#red').value;
  const greenRange = document.querySelector('#green').value;
  const blueRange = document.querySelector('#blue').value;

  mainContainer.style.backgroundColor = `rgb(${colorPicker.red[redRange]}%,${colorPicker.red[greenRange]}%,${colorPicker.red[blueRange]}%)`;
}
