const form = document.querySelector('.form');
const output = document.querySelector('.output');

const startChar = 97; // <= 97
const endChar = 122;
const maxCharsInAlpha = 26; // max Buchstaben Alphabet

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submit = e.submitter.getAttribute('class');
  const stringVal = document.querySelector('.input').value.replaceAll(' ', '').toLowerCase();
  const key = Number(document.querySelector('.key').value);

  let returnString = '';

  for (const val of stringVal) {
    if (val.charCodeAt() >= startChar && val.charCodeAt() <= endChar) {
      if (submit === 'encode') {
        returnString += String.fromCharCode(
          // Beispiel => input charcode 99(c) - 97(a) + 2(shiftkey) = 4 mod 26(all chars) Rest 4 + 97(a) = 101(e)
          ((val.charCodeAt() - startChar + key) % maxCharsInAlpha) + startChar
        );

        continue;
      } else if (submit === 'decode') {
        // decode Variante über eine mod custom Function
        let varVal = val.charCodeAt() - startChar;
        varVal = mod(varVal - key, maxCharsInAlpha);
        varVal += startChar;

        returnString += String.fromCharCode(varVal);

        continue;
      }
    }
    returnString += val;
  }

  output.innerText = returnString;
});

// Helper function
function mod(newChar, maxAlpha) {
  if (newChar < 0) newChar = maxAlpha - (Math.abs(newChar) % maxAlpha);

  return newChar % maxAlpha;
}
