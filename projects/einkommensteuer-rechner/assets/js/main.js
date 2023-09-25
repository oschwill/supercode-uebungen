/* CONTAINER */
const form = document.querySelector('.form');
const output = document.querySelector('.output');

/* EINKOMMENSSTEUER JAHR */
const incomeTax = {
  2023: {
    value: {
      very_low: 10908,
      low: [10909, 15999],
      medium: [16000, 62809],
      high: [62810, 277825],
      very_high: 277826,
    },
    variable_numbers: {
      divider: 10000,
      second_fall: [979.18, 1400],
      third_fall: [192.59, 2397, 966.53],
      fourth_fall: [0.42, 9972.98],
      fifth_fall: [0.45, 18307.73],
    },
  },
  2022: {
    value: {
      very_low: 10347,
      low: [10348, 14926],
      medium: [14927, 58596],
      high: [58597, 277825],
      very_high: 277826,
    },
    variable_numbers: {
      divider: 10000,
      second_fall: [1088.67, 1400],
      third_fall: [206.43, 2397, 869.32],
      fourth_fall: [0.42, 9336.45],
      fifth_fall: [0.45, 17671.2],
    },
  },
  2021: {
    value: {
      very_low: 9744,
      low: [9745, 14753],
      medium: [14754, 57918],
      high: [57919, 274612],
      very_high: 274613,
    },
    variable_numbers: {
      divider: 10000,
      second_fall: [995.21, 1400],
      third_fall: [208.85, 2397, 950.96],
      fourth_fall: [0.42, 9136.63],
      fifth_fall: [0.45, 17374.99],
    },
  },
  calculate(val, year) {
    Math.round(val); // runden
    // 1 Fall
    if (val <= this[year].value.very_low) {
      return 0;
    }
    // 2Fall
    if (this[year].value.low[0] <= val && val <= this[year].value.low[1]) {
      let y = (val - this[year].value.very_low) / this[year].variable_numbers.divider;
      return (
        (this[year].variable_numbers.second_fall[0] * y +
          this[year].variable_numbers.second_fall[1]) *
        y
      );
    }
    // 3 Fall
    if (this[year].value.medium[0] <= val && val <= this[year].value.medium[1]) {
      let z = (val - this[year].value.low[1]) / this[year].variable_numbers.divider;
      return (
        (this[year].variable_numbers.third_fall[0] * z +
          this[year].variable_numbers.third_fall[1]) *
          z +
        this[year].variable_numbers.third_fall[2]
      );
    }
    // 4 Fall
    if (this[year].value.high[0] <= val && val <= this[year].value.high[1]) {
      return (
        this[year].variable_numbers.fourth_fall[0] * val -
        this[year].variable_numbers.fourth_fall[1]
      );
    }
    // 5 Fall
    if (this[year].value.very_high <= val) {
      return (
        this[year].variable_numbers.fifth_fall[0] * val - this[year].variable_numbers.fifth_fall[1]
      );
    }
  },
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const year = document.querySelector('#year').value;
  const zve = Number(document.querySelector('#zve').value);
  const type = document.querySelector('input[name="type"]:checked').value;

  if (zve == '') {
    alert('Bitte geben Sie ihr Jahreseinkommen an!!');
    return;
  }

  if (type == 'einzel') {
    output.innerText = `Ihre Einkommensteuer beträgt ${incomeTax
      .calculate(zve, Number(year))
      .toFixed(2)
      .replace('.', ',')} Euro.`;
    return;
  }

  if (type == 'zusammen') {
    output.innerText = `Je Person beträgt die Einkommensteuer ${(
      incomeTax.calculate(zve, Number(year)) / 2
    )
      .toFixed(2)
      .replace('.', ',')} Euro.`;
    return;
  }
});
