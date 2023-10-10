const weekend = ['Samstag', 'Sonntag'];

const date1 = new Date('12.15.2019').toLocaleString('de-de', { weekday: 'long' });
const date2 = new Date('2.16.2001').toLocaleString('de-de', { weekday: 'long' });
const date3 = new Date('2.1.2020').toLocaleString('de-de', { weekday: 'long' });
const date4 = new Date('2.29.2020').toLocaleString('de-de', { weekday: 'long' });

const checkWork = (date) => {
  return date === weekend[0] || date === weekend[1] ? 'Weekend' : 'Arbeitstag';
};

console.log(checkWork(date1));
console.log(checkWork(date2));
console.log(checkWork(date3));
console.log(checkWork(date4));
