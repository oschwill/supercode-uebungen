const wrapper = document.querySelector('.wrapper');
let button;
let fetchData, fetchSingleData;
let urlParams = window.location.search.replace('?page=', '').split('&')[0];

const fetchUrl = 'https://picsum.photos/v2/list';
const browserUrl = window.location.href;

const getAllData = async () => {
  return await fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error Message, data not found', error);
    });
};

const getSingleData = async (singleUrl) => {
  return await fetch(singleUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error Message, data not found', error);
    });
};

const buildSite = async () => {
  if (!urlParams) {
    // Wir holen uns nur einmalig die Daten
    if (!fetchData) {
      fetchData = await getAllData();
    }
    buildGallery(fetchData);
    return;
  }

  let decodeUrlParam = decodeURIComponent(urlParams);

  const singleUrl = `https://picsum.photos/id/${decodeUrlParam}/info`;
  fetchSingleData = await getSingleData(singleUrl);

  buildSingleImagePage(fetchSingleData);
};

buildSite();

const buildGallery = (dataArr) => {
  wrapper.innerHTML = dataArr
    ?.map((data) => {
      return `
        <article key="${data.id}">
          <img src="${data.download_url}"></img>
          <p>${data.author}</p>
          <a href="?page=${data.id}"><button>See More</button></a>
        </article>
    `;
    })
    .join('');

  button = document.querySelectorAll('button');
  button.forEach((b) => b.addEventListener('click', buildSite));
};

async function buildSingleImagePage(singleData) {
  wrapper.innerHTML = `
      <div class="single-page">
        <article key="${singleData.id}">
          <img src="${singleData.download_url}"></img>
          <p>${singleData.author}</p>
        <p>Original Höhe: ${singleData.height}</p>
        <p>Original Breite: ${singleData.width}</p>
        <a href="${singleData.url}" alt="${singleData.author}" target="_blank">${singleData.url}</a>

          <a href="javascript:history.back()"><button>Zurück</button></a>
        </article>
      </div>
    `;
}
