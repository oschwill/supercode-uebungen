/* CONTAINER */
const form = document.querySelector('.form');
const output = document.querySelector('.output');

/* PROPERTIES */
const pre = 'pre';
const post = 'post';

/* EVENTLISTENER */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  /* DATAS */
  const inputString = document.querySelector('#input_string');
  const inputChar = document.querySelector('#input_char');
  let separator = document.getElementsByName('separator');

  // output clearen
  output.innerHTML = '';

  separator = Array.from(separator); // Nodelist zu einem Array konvertieren

  const separatorVal = separator.map((val) => (val.checked ? val.value : '')).join(''); // checken welcher val gesetzt ist

  if (String(separatorVal) === '' || inputString.value === '' || inputChar.value === '') {
    alert('Bitte füllen Sie alle Felder aus!!');
    return;
  }

  let preIndex = 0;
  // Wir holen uns erstmal alle Treffer Indices
  let indices = getAllIndices(inputString.value, inputChar.value);

  switch (separatorVal) {
    case pre:
      for (let i = 0; i <= indices.length; i++) {
        preIndex = createOutPut(false, indices, inputString.value, preIndex, i);
      }
      break;

    case post:
      for (let i = 0; i <= indices.length; i++) {
        // für post letzten Rest anhängen
        if (i === indices.length) {
          output.innerHTML += `<p>${inputString.value.slice(
            preIndex,
            inputString.value.length
          )}<p/>`;
        }
        preIndex = createOutPut(true, indices, inputString.value, preIndex, i);
      }
      break;
    default:
      alert('Suchen Sie sich einen Seperator aus!!');
      break;
  }
});

/* FUNCTIONS */
const getAllIndices = (stringVal, charVal) => {
  let indices = [];
  let index = -1;

  while ((index = stringVal.indexOf(charVal, index + 1)) >= 0) indices.push(index);

  return indices;
};

const createOutPut = (sep, indices, inputString, preIndex, i) => {
  output.innerHTML += `<p>${inputString.slice(preIndex, sep ? indices[i] + 1 : indices[i])}<p/>`;
  preIndex = sep ? indices[i] + 1 : indices[i];
  return preIndex;
};
