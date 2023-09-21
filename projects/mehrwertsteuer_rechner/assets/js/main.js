/* OUTPUT CONTAINER */
const outPutTaxValue = document.querySelector('.output_tax_value');
const outPutEndPriceValue = document.querySelector('.output_endprice_value');

const outPutNettoBrutto = document.querySelector('.output_netto_brutto');
const formNettoBrutto = document.querySelector('.form_netto_brutto');

const form = document.querySelector('.form');

/* INPUT CONTAINER */
const taxTypeInputContainer = document.getElementsByName('tax_type');

/* DATA */
const taxTypeObj = {
  netto: {
    type: 'netto_brutto',
    formDescription:
      'Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span class="important">*</span>',
    resultDescription: 'Bruttobetrag (Endpreis)',
  },
  brutto: {
    type: 'brutto_netto',
    formDescription:
      'Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro <span class="important">*</span>',
    resultDescription: 'Nettobetrag',
  },
};

/* EVENTLISTENER */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const taxTypeValue = document.querySelector('input[name="tax_type"]:checked').value;
  const taxValue = Number(document.querySelector('input[name="tax_value"]:checked').value);
  let formInputValue = document.querySelector('.form_input_value').value;

  formInputValue = Number(
    formInputValue.includes(',') ? formInputValue.replace(',', '.') : formInputValue
  );

  if (taxTypeValue === '' || taxValue === '' || formInputValue === '' || isNaN(formInputValue)) {
    alert('Bitte füllen Sie alle Felder aus und geben nur Zahlen ein!!!!!');
    return;
  }

  let tax = 0;

  let taxDivider = taxTypeValue === taxTypeObj.netto.type ? 100 : taxValue === 19 ? 119 : 107;
  let taxCalcType = taxTypeValue === taxTypeObj.netto.type ? 'plus' : 'minus';

  tax = formInputValue * (taxValue / taxDivider);

  calculateResult(tax, taxCalcType, formInputValue);
});

// radio button tax type event
[].forEach.call(taxTypeInputContainer, function (e) {
  e.addEventListener(
    'click',
    () => {
      let taxTypeInput = Array.from(taxTypeInputContainer)
        .map((val) => (val.checked ? val.value : ''))
        .join('');

      clearDescriptions();

      if (taxTypeInput === taxTypeObj.netto.type) {
        fillDescriptions(taxTypeObj.netto);
        return;
      }

      if (taxTypeInput === taxTypeObj.brutto.type) {
        fillDescriptions(taxTypeObj.brutto);
        return;
      }
    },
    false
  );
});

/* FUNCTIONS */
const clearDescriptions = () => {
  // clearn
  formNettoBrutto.innerHTML = '';
  outPutNettoBrutto.innerHTML = '';
};

const fillDescriptions = (type) => {
  // füllen
  formNettoBrutto.innerHTML = type.formDescription;
  outPutNettoBrutto.innerHTML = type.resultDescription;
};

const calculateResult = (tax, type, value) => {
  let result = 0;
  outPutTaxValue.innerText = `${tax.toFixed(2)} €`;
  result = type === 'plus' ? value + tax : value - tax;
  outPutEndPriceValue.innerText = `${result.toFixed(2)} €`;
};
