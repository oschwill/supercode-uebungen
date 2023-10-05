const element = document.querySelector('#element h1');

const middle = () => {
  element.className = '';
  element.classList.add('medium-border');
};

const bigCrazy = () => {
  element.className = '';
  element.classList.add('big-border');
};

const small = () => {
  element.className = '';
  element.classList.add('small-border');
};
