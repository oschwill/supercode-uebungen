const output = document.querySelector('.output');
const button = document.querySelector('button');
let isShowData = false;

const data = {
  browserName: window.navigator.appName,
  os: window.navigator.platform,
  browserVersion: window.navigator.appVersion,
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  colorDepth: screen.colorDepth,
  pixelDepth: screen.pixelDepth,
};

console.log(screen);

button.addEventListener('click', (e) => {
  isShowData = !isShowData;

  if (isShowData) {
    output.innerHTML = `
    Browsername: ${data.browserName}<br/>
    Betriebssystem-Architektur: ${data.os}<br/>
    Browser version: ${data.browserVersion}<br/>
    Innere Breite des Dokuments: ${data.innerWidth} PX<br/>
    Dokument Innenhöhe: ${data.innerHeight} PX<br/>
    Color Depth: ${data.colorDepth}<br/>
    Pixel Depth: ${data.pixelDepth}<br/>
    `;

    return;
  }

  output.innerHTML = '';
});
