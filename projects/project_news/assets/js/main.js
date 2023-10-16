/* CONTAINER*/
const submit = document.querySelector('.submit');
const output = document.querySelector('.output');
let loader, loadMore;

/* PROPERTIES */
let currentItems = 0;
const nextItems = 12; // lade immer 12 weitere Article

/* FUNCTIONS */
const getDataByParam = async (url) => {
  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error Message', error);
    });
};

const getArticles = async (e) => {
  e.preventDefault();

  // set current items to 0
  currentItems = 0;

  const searchVal = document.querySelector('#search').value;
  const language = document.querySelector('#lang').value;
  const sortBy = document.querySelector('#sort').value;

  if (searchVal === '') {
    alert('input search Value!!');
    return;
  }

  // Set Loading Screen
  output.insertAdjacentElement('beforeend', returnLoader());
  loader = document.querySelector('.loader');

  const url = `https://newsapi.org/v2/everything?q=${searchVal}&sortBy=${sortBy}&language=${language}&apiKey=${apiKey}`;

  const data = await getDataByParam(url);

  buildOutput(data);
};

const buildOutput = (data) => {
  // remove loadingscreen
  loader.remove();

  output.innerHTML = data.articles
    .map((d) => {
      return `<article class="item">
        <h2>${d.title}
        </h2>
        <p>${d.content}</p>
        <img src="${
          d.urlToImage
            ? d.urlToImage
            : 'https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg'
        }" alt="${d.author}">
        <div>
          <a href="${d.url}" target="_blank">Zum Artikel</a>
        </div>
      </article>`;
    })
    .join('');

  loadMoreFunction();
  // load first 12 Elements
  if (data.totalResults > nextItems) {
    output.innerHTML += '<button id="load-more">Load More...</button>';
    loadMore = document.querySelector('#load-more');
    loadMore.addEventListener('click', loadMoreFunction);
  }
};

const returnLoader = () => {
  const outerLoader = document.createElement('div');
  outerLoader.classList.add('loader');

  const innerLoader = document.createElement('img');
  innerLoader.setAttribute(
    'src',
    'https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif'
  );

  outerLoader.appendChild(innerLoader);

  return outerLoader;
};

const loadMoreFunction = (e) => {
  const elementList = [...document.querySelectorAll('.output .item')];
  for (let i = currentItems; i < currentItems + nextItems; i++) {
    if (elementList[i]) {
      elementList[i].style.display = 'block';
    }
  }
  currentItems += nextItems;

  if (currentItems >= elementList.length && e) {
    e.target.style.display = 'none';
  }
};

/* EVENTLISTENER */
submit.addEventListener('click', getArticles);
