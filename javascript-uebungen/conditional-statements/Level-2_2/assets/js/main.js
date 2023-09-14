/* CONTAINER */
const aqiPercent = document.querySelector('.air_quality');
const lohConcern = document.querySelector('.loh_concern');
const lohEffect = document.querySelector('.loh_effect');
const mainContainer = document.querySelector('main');

/* DATA */
const airDirtMeter = {
  low: {
    value: 50,
    color: 'green',
    concern: 'Good',
    effect: 'Little or no risk',
  },
  medium: {
    value: 100,
    color: 'yellow',
    concern: 'Moderate',
    effect: 'Acceptable quality',
  },
  high: {
    value: 150,
    color: 'orange',
    concern: 'Unhealty for sensitive groups',
    effect: 'Generable publics not likely affected',
  },
};

function checkAirQuality() {
  let airValue = Number(document.querySelector('#air').value);

  aqiPercent.innerText = airValue;

  if (airValue <= airDirtMeter.low.value) {
    setAirQualityParams(airDirtMeter.low.color, airDirtMeter.low.concern, airDirtMeter.low.effect);
  } else if (airValue > airDirtMeter.low.value && airValue <= airDirtMeter.medium.value) {
    setAirQualityParams(
      airDirtMeter.medium.color,
      airDirtMeter.medium.concern,
      airDirtMeter.medium.effect
    );
  } else if (airValue > airDirtMeter.medium.value && airValue <= airDirtMeter.high.value) {
    setAirQualityParams(
      airDirtMeter.high.color,
      airDirtMeter.high.concern,
      airDirtMeter.high.effect
    );
  }
}

function setAirQualityParams(color, concern, effect) {
  mainContainer.style.backgroundColor = color;
  lohConcern.innerText = concern;
  lohEffect.innerText = effect;
}
