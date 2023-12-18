export const getInitialData = async () => {
  return await fetch(`${import.meta.env.VITE_FETCH_URL}/movies/`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      return [];
    });
};
