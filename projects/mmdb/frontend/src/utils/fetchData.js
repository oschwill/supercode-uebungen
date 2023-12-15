export const getInitialData = async () => {
  return await fetch('http://localhost:9000/api/v1/movies/')
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
