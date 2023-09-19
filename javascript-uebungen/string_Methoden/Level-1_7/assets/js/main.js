const text = 'Sam is good at codingschool';

let myVar = text.replace('good', 'bad').replace('codingschool', 'school');
let myVar2 = text.replace('Sam', 'Susi').replace('codingschool', 'school');
let myVar3 = text.replace('codingschool', 'tennis');

document.write(`${myVar} <br/>`);
document.write(`${myVar2} <br/>`);
document.write(`${myVar3} <br/>`);
