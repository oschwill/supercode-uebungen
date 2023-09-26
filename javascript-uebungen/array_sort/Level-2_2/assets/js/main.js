let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000];

const sortAlphabeticalFN = (a, b) => {
  return a - b;
};

console.log(numArray2.sort(sortAlphabeticalFN));
