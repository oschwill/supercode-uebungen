import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

const SearchInput = () => {
  const data = useLoaderData();
  const items = data
    .map((d) => {
      return {
        id: d._id,
        name: d.title,
      };
    })
    .filter((v, i, a) => a.findIndex((v2) => ['name'].every((k) => v2[k] === v[k])) === i);

  const navigate = useNavigate();

  // const handleOnSearch = (string, results) => {};

  const handleOnSelect = (item) => {
    console.log(item);
    navigate(`/details/${item.id}`);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  const formatResult = (item) => {
    return (
      <div className="h-[96]">
        <Link to={`/details/${item.id}`}>{item.name}</Link>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: 350 }}>
          <ReactSearchAutocomplete
            items={items}
            resultStringKeyName="name"
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
          />
        </div>
      </header>
    </div>
  );
};

export default SearchInput;
