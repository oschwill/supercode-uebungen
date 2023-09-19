/* CONTAINER */
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
const article = document.querySelector('article');

searchButton.addEventListener('click', () => {
  if (searchInput.value === '') {
    alert('Bite geben Sie einen Suchbegriff ein!');
    return;
  }

  if (article.innerText.includes(searchInput.value)) {
    let articleArr = article.innerText.split(' ');
    // let found = articleArr.indexOf(searchInput.value);
    let returnString = articleArr
      .map((val, key) => {
        // unschön
        if (val.includes(searchInput.value) || `${val} ` == searchInput.value) {
          return `<span style="background-color: yellow;">${val}</span>`;
        }
        return val;
      })
      .join(' ');

    article.innerHTML = returnString;
    return;
  }

  alert('Der Suchbegriff ist nicht vorhanden!');
});
