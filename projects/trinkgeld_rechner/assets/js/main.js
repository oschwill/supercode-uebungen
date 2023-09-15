/* CONTAINER */
const outputTip = document.querySelector('.output_tip');
const outputBillTotal = document.querySelector('.output_bill_total');
const outputBillPerson = document.querySelector('.output_bill_person');
const inputBill = document.querySelector('#bill');
const inputGroup = document.querySelector('#group');
const inputService = document.querySelector('#service');

/* FUNCTIONS */
const calculateCosts = () => {
  event.preventDefault();
  let bill = Number(inputBill.value);
  let group = Number(inputGroup.value);
  let service = Number(inputService.value);

  removeErrorClasses();

  /* VALIDIERUNG BILL*/
  if (isNaN(bill) || bill === 0) {
    inputBill.classList.add('error');
    return;
  }
  /* VALIDIERUNG GROUP*/
  if (isNaN(group) || group === 0) {
    inputGroup.classList.add('error');
    return;
  }
  /* VALIDIERUNG SERVICE*/
  if (isNaN(service) || service === 0) {
    inputService.classList.add('error');
    return;
  }

  calculateOutput(bill, group, service);
};

const removeErrorClasses = () => {
  inputBill.classList.remove('error');
  inputGroup.classList.remove('error');
  inputService.classList.remove('error');
};

const calculateOutput = (bill, group, service) => {
  let tip = bill * (service / 100);
  outputTip.innerText = `Das Trinkgeld ist: ${tip.toFixed(2)} €`;
  let resultBill = bill + tip;
  outputBillTotal.innerText = `Die Gesamtsummer beträgt: ${resultBill.toFixed(2)} €`;
  let maxPersons = resultBill / group;
  outputBillPerson.innerText = `Der Preis pro Person ist: ${maxPersons.toFixed(2)} €`;
};
