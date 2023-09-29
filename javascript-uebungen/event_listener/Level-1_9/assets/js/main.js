const select = document.querySelector('#farbeAuswahlen');
const submit = document.querySelector('#button');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  let index = select.selectedIndex;

  select[index].remove();
});
