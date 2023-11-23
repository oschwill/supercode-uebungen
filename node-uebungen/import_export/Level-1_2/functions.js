const getFirstElement = (data) => {
  return data[0];
};

export const getAllInsteadLast = (data) => {
  return data.slice(0, -1);
};

export const getLastElement = (data) => {
  return data.slice(data.length - 1);
};

export const getAllInsteadFirst = (data) => {
  return data.slice(1);
};

export const deleteElementByName = (data, del) => {
  return data.filter((cur) => cur !== del);
};

export const removeDuplicates = (data) => {
  return [...new Set(data)];
};

export const sumNumbers = (data) => {
  return data.reduce((acc, cur) => acc + cur, 0);
};

export const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const firstLetterUpper = (_string) => {
  return `${_string.charAt(0).toUpperCase()}${_string.slice(1)}`;
};
export const upperCaseString = (_string) => {
  return _string.toUpperCase();
};

export const equalFirstLastLetter = (_string) => {
  return _string[0].toLowerCase() === _string[_string.length - 1].toLowerCase();
};

export default getFirstElement;
