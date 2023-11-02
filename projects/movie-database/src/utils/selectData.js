const selectData = [
  'Comedy',
  'Drama',
  'Fantasy',
  'Biography',
  'Crime',
  'Thriller',
  'Sci-Fi',
  'Action',
  'Adventure',
  'Mystery',
  'Romance',
  'War',
  'Family',
  'Musical',
  'Animation',
  'Horror',
  'Film-Noir',
  'Sport',
  'Western',
  'History',
];

export const sortDataByAscending = selectData.sort((a, b) => a.localeCompare(b));
