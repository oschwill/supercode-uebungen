import PropTypes from 'prop-types';

import { sortDataByAscending } from '../../utils/selectData';
import SearchBar from './SearchBar';
import { useContext } from 'react';
import { DataFilterContext } from '../../Context/Context';

const FilterButtons = ({ userInput }) => {
  const { handleDataFilter } = useContext(DataFilterContext);

  return (
    <header className="flex flex-col items-center mt-5">
      <SearchBar userInput={userInput} />
      <section className="flex justify-center gap-5">
        <button
          className="bg-black p-2 px-7 text-white rounded-md"
          onClick={() => handleDataFilter('date-asc')}
        >
          Sort by Date Ascending
        </button>
        <button
          className="bg-black p-2 px-7 text-white rounded-md"
          onClick={() => handleDataFilter('date-desc')}
        >
          Sort by Date Descending
        </button>
        <button
          className="bg-black p-2 px-7 text-white rounded-md"
          onClick={() => handleDataFilter('rate')}
        >
          Best Rate
        </button>
        <button
          className="bg-black p-2 px-7 text-white rounded-md"
          onClick={() => handleDataFilter('name-asc')}
        >
          A-Z
        </button>
        <button
          className="bg-black p-2 px-7 text-white rounded-md"
          onClick={() => handleDataFilter('name-desc')}
        >
          Z-A
        </button>
        <select
          name="genre"
          id="genre"
          className="bg-black p-2 px-7 text-white rounded-md cursor-pointer"
          onChange={(e) => handleDataFilter('genre', e.target.value)}
        >
          <option value="">Search by Genre</option>
          {sortDataByAscending.map((data, index) => {
            return (
              <option value={data} key={index + 1}>
                {data}
              </option>
            );
          })}
        </select>
      </section>
    </header>
  );
};

FilterButtons.propTypes = {
  userInput: PropTypes.object,
};

export default FilterButtons;
