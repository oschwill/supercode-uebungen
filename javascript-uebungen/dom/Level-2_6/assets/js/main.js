const content = document.getElementById('content');
let appendedChild;

const buildElements = () => {
  const headLine = document.createElement('h1');
  headLine.textContent = 'Zufälliges Bild mit JS anzeigen';
  content.appendChild(headLine);

  const button = document.createElement('button');
  button.textContent = 'Click Me';
  button.setAttribute('class', 'button');
  content.appendChild(button);

  button.addEventListener('click', (e) => {
    appendedChild?.remove(); // remove if exists
    let randomImg = document.createElement('img');
    let rndIndex = getRandomPicture();

    randomImg.setAttribute('src', rndIndex.download_url);
    randomImg.setAttribute('width', rndIndex.width / 10);
    randomImg.setAttribute('height', rndIndex.height / 10);
    appendedChild = content.appendChild(randomImg);
  });
};

buildElements();

const getRandomPicture = () => {
  return data[Math.floor(Math.random() * data.length)];
};
