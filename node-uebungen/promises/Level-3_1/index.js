const asyncOperation = (number) => {
  return new Promise((resolve, reject) => {
    if (!isNaN(number)) {
      resolve((number *= number));
    } else {
      reject('NUMBER MULTIPLIKATION FEHLGESCHLAGEN!!');
    }
  });
};

const chainBuilder = () => {
  return asyncOperation(4)
    .then((result) => asyncOperation(result))
    .then((result) => asyncOperation(result))
    .then((result) => result);
};

chainBuilder()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
