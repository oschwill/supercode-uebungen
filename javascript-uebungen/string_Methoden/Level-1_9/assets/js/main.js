const text1 = 'Sam is going to codingschool';
const text2 = 'Susi';
const text3 = 'and';

document.write(
  `${text1.replace('codingschool', 'school').concat(' and to the movie theater')}<br/>`
);
document.write(`${text1.slice(0, text1.search('codingschool')).concat(' the movie theater')}<br/>`);
document.write(
  text2.concat(` ${text3}`).concat(` ${text1.replace('codingschool', 'school')}<br/>`)
);
document.write(
  text2
    .concat(` ${text3}`)
    .concat(` ${text1.replace('codingschool', 'gym and to the movie theater')}<br/>`)
);
document.write(
  `${text1
    .replace('Sam', text2)
    .replace('codingschool', 'school')
    .concat(' and to the movie theater')}`
);
