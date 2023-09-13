/* CONTAINER */
const wrapper = document.querySelector('.wrapper');
const errorMsg = document.querySelector('.error');

const changeColor = () => {
  const color = document.querySelector('#color').value;
  event.preventDefault();
  try {
    wrapper.style.backgroundColor = ''; // clearen
    wrapper.style.backgroundColor = color;

    // clear error Message
    errorMsg.innerHTML = '';

    // handelt es sich hierbei um eine korrekte Color?
    if (wrapper.style.backgroundColor === '') {
      throw new Error();
    }
  } catch (error) {
    errorMsg.innerHTML += `${error}, This is not a correct Color!`;
  }
};
