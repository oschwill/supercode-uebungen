let myMusic = [
  {
    artist: 'The Beatles',
    title: 'Abbey Road',
    release_year: 1969,
    medium: ['LP', 'CD', 'MC', 'Download'],
    gold: true,
  },
  {
    artist: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    release_year: 1978,
    medium: ['CS', 'CD', 'LP', 'Download'],
    gold: true,
  },
  {
    artist: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    release_year: 1971,
    medium: ['CS', 'LP', 'Download'],
    gold: true,
  },
  {
    artist: 'Metallica',
    title: 'Kill ’Em All und Ride the Lightning',
    release_year: 1983,
    medium: ['LP', 'CD', 'MC', 'Download'],
    gold: true,
  },
];

// Artists
myMusic.forEach((art) => {
  document.write(
    `<p>${art.artist}</p> <p>${art.title}</p><p>${art.medium}</p>${
      art.release_year < 1975 ? '<p>' + art.release_year + '</p>' : ''
    }`
  );
  document.write('<br/><br/>');
});
