const myFunction = (number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isNaN(number)) {
        resolve(number * 2);
      } else {
        reject('Number Verdopplung fehlgeschlagen');
      }
    }, 2000);
  });
};

myFunction('test')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
