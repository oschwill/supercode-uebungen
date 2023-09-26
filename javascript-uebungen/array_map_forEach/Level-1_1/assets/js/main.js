let getraenke = [
  'Coca-Cola',
  'Apfelsaft',
  'Pepsi',
  'Traubensaft',
  'Sprite',
  'Orangensaft',
  'Red Bull Energy Drink',
  'Fanta',
];

getraenke.sort().forEach((val) => {
  console.log(val);
  document.write(`${val} <br/>`);
});
