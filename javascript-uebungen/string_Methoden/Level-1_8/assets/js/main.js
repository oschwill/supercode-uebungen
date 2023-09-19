const text = 'Sam is going to codingschool';

let myVar = `${text.slice(0, 3).toUpperCase()}${text.slice(3, -12)}${text
  .slice(-6, text.length)
  .toUpperCase()}`;

console.log();

let myVar2 = `${text.slice(text.indexOf('Sam'), 'Sam'.length).toLowerCase()} ${text
  .slice(text.indexOf('is'), text.indexOf('codingschool'))
  .toUpperCase()}${text.slice(-6, text.length)}`;

let myVar3 = `
${text[text.search('Sam')].charAt(0).toUpperCase()}${text.substring(1, 3)}
${text[text.search('is')].charAt(0).toUpperCase()}${text.substring(text.search('is') + 1, 6)}
${text[text.search('going')].charAt(0).toUpperCase()}${text.substring(text.search('going') + 1, 12)}
${text[text.search('to')].charAt(0).toUpperCase()}${text.substring(text.search('to') + 1, 16)}
${text[text.search('school')].charAt(0).toUpperCase()}${text.substring(
  text.search('school') + 1,
  28
)}
`;

document.write(myVar + '<br/>');
document.write(myVar2 + '<br/>');
document.write(myVar3);
