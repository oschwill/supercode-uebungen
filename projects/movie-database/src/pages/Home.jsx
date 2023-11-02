import PropTypes from 'prop-types';

import FilterButtons from '../components/filter/FilterButtons';
import MovieList from '../components/filter/output/MovieList';

const Home = ({ userInput }) => {
  return (
    <>
      <FilterButtons userInput={userInput} />
      <main className="flex justify-center items-center">
        <MovieList />
      </main>
    </>
  );
};

Home.propTypes = {
  userInput: PropTypes.object,
};

export default Home;
