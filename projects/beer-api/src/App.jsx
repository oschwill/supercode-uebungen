import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useContext } from 'react';

import './App.css';
import Home from './pages/Home';
import BeerList from './pages/BeerList';
import { useEffect, useState } from 'react';
import BeerDetail from './pages/BeerDetail';

export const UrlContext = createContext('https://ih-beers-api2.herokuapp.com/beers');

function App() {
  const [beerData, setBeerData] = useState([]);
  const url = useContext(UrlContext);

  const getBeerData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBeerData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBeerData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beer-list" element={<BeerList beerData={beerData} />} />
          <Route
            path="/beer-detail/:id"
            element={
              <UrlContext.Provider value="https://ih-beers-api2.herokuapp.com/beers/">
                <BeerDetail />
              </UrlContext.Provider>
            }
          />
          <Route
            path="/random-beer"
            element={
              <UrlContext.Provider value="https://ih-beers-api2.herokuapp.com/beers/random">
                <BeerDetail />
              </UrlContext.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
