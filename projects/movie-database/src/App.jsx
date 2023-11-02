import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useReducer, useState } from 'react';

/* FUNCTIONS */

/* Data */
import movies from './data/dataBase';
import { DataFilterContext, MovieDataContext } from './Context/Context';
import { sortByParam } from './functions/sortFunction';
import MovieDetail from './pages/MovieDetail';

function App() {
  const [input, setInput] = useState('');
  const [data, setData] = useState('');
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    setData(movies);
  }, []);

  const handleDataFilter = (filterType, value = null) => {
    sortByParam(filterType, value, setData, movies);

    forceUpdate();
  };

  const handleInputResult = (e) => {
    e.preventDefault();

    if (!input) {
      return;
    }

    sortByParam('input', input, setData, movies);
  };

  return (
    <>
      <MovieDataContext.Provider value={data}>
        <DataFilterContext.Provider value={{ handleDataFilter }}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={<Home userInput={{ input, setInput, handleInputResult }} />}
              />
              <Route path="/detail/:name" element={<MovieDetail />} />
            </Routes>
          </BrowserRouter>
        </DataFilterContext.Provider>
      </MovieDataContext.Provider>
    </>
  );
}

export default App;
