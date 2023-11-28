const randomNumber = () => {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    num < 6 ? reject(`REJECTED: ${num}`) : resolve(`RESOLVED: ${num}`);
  });
};

randomNumber()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
