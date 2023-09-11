const txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.';

let charPosition = txt.indexOf('h');
console.log(charPosition); // auf Position 27

let wordPosition = txt.indexOf('Earth');
console.log(wordPosition); // auf Position 38

wordPosition = txt.indexOf('Moon');
console.log(wordPosition); // gibt -1 aus
