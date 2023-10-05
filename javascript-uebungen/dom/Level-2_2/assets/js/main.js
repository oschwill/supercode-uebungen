const form = document.forms;

form.form1.addEventListener('submit', (e) => {
  console.log(
    `Full name: ${form.form1.children[1].value} ${form.form1.children[3].value}, Land: ${form.form1.children[5].value}`
  );
});
