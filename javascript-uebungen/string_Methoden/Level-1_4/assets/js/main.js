const A = 'Susi is going to codingschool';

let txt = A.slice(0, 4);
let txt2 = A.slice(5, 7);
let txt3 = `${A.slice(5, -13)} ${A.slice(-6, A.length)}`;
let txt4 = A.slice(-6, A.length);
let txt5 = `${A.slice(0, 7)} ${A.slice(-6, A.length)}`;

document.write(`${txt} <br/>`);
document.write(`${txt2} <br/>`);
document.write(`${txt3} <br/>`);
document.write(`${txt4} <br/>`);
document.write(`${txt5} <br/>`);
