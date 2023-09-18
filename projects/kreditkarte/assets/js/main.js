/* CONTAINER OUTPUTS */
const outputFullName = document.querySelector('.output_full_name');
const outputFullNameExpires = document.querySelector('.output_expires');
const creditCardNumber = document.querySelector('.credit_card_number');
const cvvOutput = document.querySelector('.cvv_output');

/* CONTAINER INPUTS */
const cardNumber = document.querySelector('#card_number');
const cardHolder = document.querySelector('#card_holder');
const expirationDate = document.querySelector('#expiration_date');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('.form');

/* PROPERTIES */
const maxLength = 16;

/* EVENT LISTENER*/
cardNumber.addEventListener('keyup', (e) => {
  console.log(e.which);
  if ((e.which < 48 || e.which > 57) && (e.which < 96 || e.which > 105)) {
    cardNumber.value = ''; // block non numbers!
    return;
  }

  if (isNaN(cardNumber.value)) {
    return;
  }

  creditCardNumber.innerText = ''; // innerText clearn
  let clearText = `${cardNumber.value}${'#'.repeat(maxLength - cardNumber.value.length)}`; // input plus hash
  clearText = clearText.match(/.{1,4}/g); // regexen alle 4 chars zu einem Array
  creditCardNumber.innerText = clearText.join(' '); // fügen den string wieder zusammen mit white spaces zusammen
});

cardHolder.addEventListener('keyup', () => {
  outputFullName.innerText = cardHolder.value;
});

expirationDate.addEventListener('change', () => {
  let expirationData = expirationDate.value.split('-');

  outputFullNameExpires.innerText = `${expirationData[1]}/${expirationData[0]}`;
});

form.addEventListener('submit', () => {
  event.preventDefault();

  removeErrorClasses();

  if (cardNumber.value.length !== maxLength || cardNumber.value == '') {
    cardNumber.classList.add('error');
    return;
  }

  if (cardHolder.value == '') {
    console.log('test');
    cardHolder.classList.add('error');
    return;
  }

  if (expirationDate.value == '') {
    expirationDate.classList.add('error');
    return;
  }

  if (cvv.value == '') {
    cvv.classList.add('error');
    return;
  }

  cvvOutput.innerText = `Ihr Sicherheitscode lautet: ${cvv.value}`;
});

/* FUNCTIONS */
const removeErrorClasses = () => {
  [cardNumber, cardHolder, expirationDate, cvv].forEach((val) => {
    val.classList.remove('error');
  });
};
