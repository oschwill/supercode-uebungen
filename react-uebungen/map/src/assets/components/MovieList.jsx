import MovieItem from './MovieItem';
import movies from './data';
import './MovieList.css';

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map((val, index) => (
        <MovieItem movieList={val} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
