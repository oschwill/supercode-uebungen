let txt2 =
  'Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.';

let searchElement = txt2.search(';');
console.log(searchElement);

searchElement = txt2.search('green');
console.log(searchElement);

searchElement = txt2.search('blue');
console.log(searchElement);
