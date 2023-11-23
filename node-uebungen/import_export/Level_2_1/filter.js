export const bigPopulation = (city) => {
  return city.filter((cur) => cur.population > 100000);
};

export const lowPopulation = (city) => {
  return city.filter((cur) => cur.population < 100000);
};
