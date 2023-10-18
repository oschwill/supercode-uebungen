import PropTypes from 'prop-types';
import CountStars from './CountStars';

const MovieItem = ({ movieList }) => {
  return (
    <div className="movie-item">
      <p>{movieList.title}</p>
      <p>{movieList.year}</p>
      <p>{movieList.director}</p>
      <p>{movieList.duration}</p>
      <CountStars rate={movieList.rate} />
      {movieList.genre.map((val, index) => (
        <p key={index}>{val}</p>
      ))}
    </div>
  );
};

MovieItem.propTypes = {
  movieList: PropTypes.object,
  id: PropTypes.number,
};

export default MovieItem;
