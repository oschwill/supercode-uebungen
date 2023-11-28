const myFunction = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 1000) + 1;
      if (!isNaN(timer)) {
        resolve(num);
      } else {
        reject('FEHLGESCHLAGEN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      }
    }, timer);
  });
};

Promise.all([myFunction(2000), myFunction(4000)])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
