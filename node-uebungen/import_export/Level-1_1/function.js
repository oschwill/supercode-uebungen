const dataOuptut = (data) => {
  return data.sort((a, b) => (Number(a) ? a - b : a.localeCompare(b)));
};

export default dataOuptut;
