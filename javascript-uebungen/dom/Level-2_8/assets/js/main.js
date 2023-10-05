const submit = document.querySelector('#enter');
const list = document.getElementsByTagName('ul');
const userInput = document.querySelector('#userinput');

const addListItem = () => {
  let userInputVal = userInput.value;
  const newText = document.createTextNode(userInputVal);

  if (!userInputVal) {
    alert('No Input!!');
    return;
  }

  let newLi = document.createElement('li');
  newLi.appendChild(newText);
  list[0].appendChild(newLi);

  // clear
  userInput.value = '';
};

submit.addEventListener('click', addListItem);
userInput.addEventListener('keypress', (e) => (e.key === 'Enter' ? addListItem() : null));
