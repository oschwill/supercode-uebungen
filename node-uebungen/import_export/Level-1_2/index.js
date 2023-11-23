import { input, names, numbers } from './data.js';
import getFirstElement, {
  deleteElementByName,
  equalFirstLastLetter,
  firstLetterUpper,
  getAllInsteadFirst,
  getAllInsteadLast,
  getLastElement,
  getRandomNumber,
  removeDuplicates,
  sumNumbers,
  upperCaseString,
} from './functions.js';

console.log(getFirstElement(names));
console.log(getFirstElement(numbers));
console.log('###############################################################');
console.log(getAllInsteadLast(names));
console.log(getAllInsteadLast(numbers));
console.log('###############################################################');
console.log(getLastElement(names));
console.log(getLastElement(numbers));
console.log('###############################################################');
console.log(getAllInsteadFirst(names));
console.log(getAllInsteadFirst(numbers));
console.log('###############################################################');
console.log(deleteElementByName(input, 'remove'));
console.log('###############################################################');
console.log(removeDuplicates(numbers));
console.log('###############################################################');
console.log(sumNumbers(numbers));
console.log('###############################################################');
console.log(getRandomNumber(0, 5));
console.log('###############################################################');
console.log(firstLetterUpper('test'));
console.log('###############################################################');
console.log(upperCaseString('test'));
console.log('###############################################################');
console.log(equalFirstLastLetter('Test'));
