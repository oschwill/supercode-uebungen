import PropTypes from 'prop-types';

const SearchBar = ({ userInput }) => {
  return (
    <form className=" mb-5" onSubmit={userInput.handleInputResult}>
      <label htmlFor="search"></label>
      <input
        type="text"
        id="search"
        value={userInput.input}
        placeholder="Search Movie..."
        className="p-2 border-2 mr-4"
        onChange={(e) => userInput.setInput(e.target.value)}
      />
      <input
        type="submit"
        value="search"
        className="bg-black p-2 px-7 text-white rounded-md hover:bg-green-950 cursor-pointer"
      />
    </form>
  );
};

SearchBar.propTypes = {
  userInput: PropTypes.object,
};

export default SearchBar;
