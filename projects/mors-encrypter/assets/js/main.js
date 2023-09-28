const form = document.querySelector('.form');
const output = document.querySelector('.output');

let morseAlphabet = [
  { letter: '1', morseCode: '.----' },
  { letter: '2', morseCode: '..---' },
  { letter: '3', morseCode: '...--' },
  { letter: '4', morseCode: '....-' },
  { letter: '5', morseCode: '.....' },
  { letter: '6', morseCode: '-....' },
  { letter: '7', morseCode: '--...' },
  { letter: '8', morseCode: '---..' },
  { letter: '9', morseCode: '----.' },
  { letter: '0', morseCode: '-----' },
  { letter: ' ', morseCode: '/ ' },
  { letter: 'A', morseCode: '.-' },
  { letter: 'B', morseCode: '-...' },
  { letter: 'C', morseCode: '-.-.' },
  { letter: 'D', morseCode: '-..' },
  { letter: 'E', morseCode: '.' },
  { letter: 'F', morseCode: '..-.' },
  { letter: 'G', morseCode: '--.' },
  { letter: 'H', morseCode: '....' },
  { letter: 'I', morseCode: '..' },
  { letter: 'J', morseCode: '.---' },
  { letter: 'K', morseCode: '-.-' },
  { letter: 'L', morseCode: '.-..' },
  { letter: 'M', morseCode: '--' },
  { letter: 'N', morseCode: '-.' },
  { letter: 'O', morseCode: '---' },
  { letter: 'P', morseCode: '.--.' },
  { letter: 'Q', morseCode: '--.-' },
  { letter: 'R', morseCode: '.-.' },
  { letter: 'S', morseCode: '...' },
  { letter: 'T', morseCode: '-' },
  { letter: 'U', morseCode: '..-' },
  { letter: 'V', morseCode: '...-' },
  { letter: 'W', morseCode: '.--' },
  { letter: 'X', morseCode: '-..-' },
  { letter: 'Y', morseCode: '-.--' },
  { letter: 'Z', morseCode: '--..' },
];

const validChars = {
  upperChars: {
    min: 65,
    max: 90,
  },
  lowerChars: {
    min: 97,
    max: 122,
  },
  numbers: {
    min: 48,
    max: 57,
  },
  space: 32,
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let inputVal = document.querySelector('.input').value;
  let returnString = '';

  let validateArr = inputVal
    .split('')
    .filter((val) =>
      (val.charCodeAt() < validChars.lowerChars.min &&
        val.charCodeAt() > validChars.upperChars.max) ||
      (val.charCodeAt() < validChars.upperChars.min && val.charCodeAt() > validChars.numbers.max) ||
      (val.charCodeAt() < validChars.numbers.min && val.charCodeAt() > validChars.space) ||
      val.charCodeAt() > validChars.lowerChars.max ||
      val.charCodeAt() < validChars.space
        ? val
        : null
    );

  // Validation!
  if (validateArr.length > 0) {
    alert('Bitte geben Sie nur [a-zA-Z0-9] and whitespace an!!');
    return;
  }

  for (const element of inputVal) {
    returnString += morseAlphabet.find((val) => val.letter === element.toUpperCase()).morseCode;
  }

  output.innerText = returnString;
});
