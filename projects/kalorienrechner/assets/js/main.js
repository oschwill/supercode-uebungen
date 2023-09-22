/* CONTAINER */
const output = document.querySelector('.output');
const form = document.querySelector('.form');
const selectForm = document.querySelector('#activity');

/* DATA */
const female = 'w';
const man = 'm';

const genderKilCalObj = {
  women: {
    fixVal: 655.1,
    weightMultiplier: 9.6,
    heightMultiplier: 1.8,
    ageMultiplier: 4.7,
    kiloJulMultiplier: 4.184,
  },
  man: {
    fixVal: 66.47,
    weightMultiplier: 13.7,
    heightMultiplier: 5,
    ageMultiplier: 6.8,
    kiloJulMultiplier: 4.184,
  },
};

const selectFieldArr = [
  {
    value: 0.95,
    description: 'Schlafen',
  },
  {
    value: 1.2,
    description: 'Nur Sitzen oder Liegen',
  },
  {
    value: 1.5,
    description:
      'Aussließlich sitzende Tätigkeit mit wenig oder keiner körperlichen Aktivität in der Freizeit, z.B. Büroarbeit',
  },
  {
    value: 1.7,
    description:
      'Sitzende Tätigkeit mit zeitweilig gehender oder stehender Tätigkeit, z.B. Studierende,Fließbandarbeiter, Laboranten, Kraftfahrer',
  },
  {
    value: 1.9,
    description:
      'Überwiegend gehende oder stehende Tätigkeit, z.B. Verkäufer, Kellner, Handwerker, Mechaniker, Hausfrauen',
  },
  {
    value: 2.2,
    description: 'Körperlich anstrengende berufliche Arbeit',
  },
];

/* FUNCTIONS */
const fillSelectedField = () => {
  const returnVals = selectFieldArr
    .map((val) => {
      return `<option value="${val.value}">${val.description}</option>`;
    })
    .join('');

  selectForm.insertAdjacentHTML('afterbegin', returnVals);
};

const calculateResults = (obj, weight, bodyHeight, age, activity) => {
  let grundKcalResult = 0;
  let gesamtKcalResult = 0;
  let grundKjResult = 0;
  let gesamtKjResult = 0;

  /* Grundumsatz Kcal */
  grundKcalResult =
    obj.fixVal +
    obj.weightMultiplier * weight +
    obj.heightMultiplier * bodyHeight -
    obj.ageMultiplier * age;

  /* GesamtUmsatz Kcal */
  gesamtKcalResult = grundKcalResult * activity;

  /* GrundUmsatz KJ mit Pal / Gesamtumsatz Kj mit Pal */
  grundKjResult = grundKcalResult * obj.kiloJulMultiplier;
  gesamtKjResult = gesamtKcalResult * obj.kiloJulMultiplier;

  let resultArr = { grundKcalResult, grundKjResult, gesamtKcalResult, gesamtKjResult };
  createOutPut(resultArr);
};

const createOutPut = ({ grundKcalResult, grundKjResult, gesamtKcalResult, gesamtKjResult }) => {
  /* OUPTUT generieren */
  output.innerHTML = `
      <div>&nbsp;</div>
      <div>Kcal</div>
      <div>KJ</div>
      <div>Grundumsatz</div>
      <div>${grundKcalResult.toFixed(2)}</div>
      <div>${grundKjResult.toFixed(2)}</div>
      <div>Gesamtumsatz</div>
      <div>${gesamtKcalResult.toFixed(2)}</div>
      <div>${gesamtKjResult.toFixed(2)}</div>     
      `;
};

/* EVENTLISTENER */
window.addEventListener('load', fillSelectedField); // Unser Select Feld füllen

form.addEventListener('submit', () => {
  event.preventDefault();
  const bodyHeight = Number(document.querySelector('#body_height').value);
  const age = Number(document.querySelector('#age').value);
  const weight = Number(document.querySelector('#weight').value);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const activity = Number(selectForm.value);

  /* VALIDIERUNG */
  let boolVals = [bodyHeight, age, weight, activity].filter((val) => val == '' || isNaN(val));

  if (gender == '' || boolVals.length > 0) {
    alert('Bitte füllen Sie alle Felder aus!');
    return;
  }

  calculateCalories(bodyHeight, age, weight, gender, activity);
});

const calculateCalories = (bodyHeight, age, weight, gender, activity) => {
  switch (gender) {
    case female:
      calculateResults(genderKilCalObj.women, weight, bodyHeight, age, activity);
      break;
    case man:
      calculateResults(genderKilCalObj.man, weight, bodyHeight, age, activity);
      break;
    default:
      alert('Fehler bei der Berechnung, der Rechner wird heruntergefahren und explodiert in...');
      break;
  }
};
