export const sortByParam = (sortType, value, setData, movies) => {
  switch (sortType) {
    case 'date-asc':
      setData(movies.sort((a, b) => a.year.localeCompare(b.year)));
      break;
    case 'date-desc':
      setData(movies.sort((a, b) => b.year.localeCompare(a.year)));
      break;
    case 'rate':
      setData(movies.sort((a, b) => b.rate.localeCompare(a.rate)));
      break;
    case 'name-asc':
      setData(movies.sort((a, b) => a.title.localeCompare(b.title)));
      break;
    case 'name-desc':
      setData(movies.sort((a, b) => b.title.localeCompare(a.title)));
      break;
    case 'genre':
      setData(movies.filter((m) => m.genre.includes(value)));
      break;
    case 'input':
      setData(movies.filter((m) => m.title.toLowerCase().includes(value.toLowerCase())));
      break;

    default:
      break;
  }
};
