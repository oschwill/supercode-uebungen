const body = document.querySelector('body');

let edelMetallPreise = [
  { name: 'Gold', preiseGramEuro: 42.91, veraenderung: '+0.12%' },
  { name: 'Silber', preiseGramEuro: 0.51, veraenderung: '+1.02%' },
  { name: 'Platin', preiseGramEuro: 25.74, veraenderung: '+0.41%' },
  { name: 'Palladium', preiseGramEuro: 50.93, veraenderung: '0.00%' },
  { name: 'Rhodium', preiseGramEuro: 160.12, veraenderung: '-0.10%' },
  { name: 'Iridium', preiseGramEuro: 42.84, veraenderung: '0.00%' },
  { name: 'Ruthenium', preiseGramEuro: 7.36, veraenderung: '0.00%' },
  { name: 'Rhenium', preiseGramEuro: 37.22, veraenderung: '-0.53%' },
  { name: 'Osmium', preiseGramEuro: 11.54, veraenderung: '0.00%' },
];

let names = [];
let prices = [];
let change = [];
let indexMaxLength = edelMetallPreise.length - 1;

edelMetallPreise.forEach((el) => names.push(el.name));

let namesMap = names.map((n) => n); // ?

edelMetallPreise.forEach((el) => prices.push(el.preiseGramEuro));

let priceMap = prices.map((p) => p); // ?

edelMetallPreise.forEach((el) => change.push(el.veraenderung));

let changeMap = change.map((v) => v); // ?

let lowPrices = edelMetallPreise.filter((el) => el.preiseGramEuro > 50);
console.log(Object.keys(edelMetallPreise[0])[0]);

let table = edelMetallPreise
  .map((val, key) => {
    return key === 0
      ? `
        <table>
        <tr><th>${Object.keys(edelMetallPreise[key])[key]}</th><th>${
          Object.keys(edelMetallPreise[key])[key + 1]
        }</th><th>${Object.keys(edelMetallPreise[key])[key + 2]}</th></tr>
        <tr><td>${val.name}</td><td>${val.preiseGramEuro}</td><td>${val.veraenderung}</td></tr>
      `
      : key !== indexMaxLength
      ? `
        <tr><td>${val.name}</td><td>${val.preiseGramEuro}</td><td>${val.veraenderung}</td></tr>
      `
      : `
        <tr><td>${val.name}</td><td>${val.preiseGramEuro}</td><td>${val.veraenderung}</td></tr>
        </table>
      `;
  })
  .join('');

body.insertAdjacentHTML('beforeend', table);
