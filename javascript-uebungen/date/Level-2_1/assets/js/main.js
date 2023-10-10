const main = document.querySelector('main');

let date = new Date();

const meineSuperDuperFunktionFuerEineDatumsAusgabeAufDemBildschirmUndSoAllesKlaroFragezeichen = (
  date
) => {
  main.innerText = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

meineSuperDuperFunktionFuerEineDatumsAusgabeAufDemBildschirmUndSoAllesKlaroFragezeichen(date);
