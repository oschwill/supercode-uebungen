import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const fetchUrl = 'https://fakestoreapi.com/products';

import './App.css';
import Home from './pages/Home';
import ShopList from './pages/ShopList';
import ItemDetails from './pages/ItemDetails';

function App() {
  const [shopData, setShopData] = useState([]);

  const getData = () => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setShopData(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopList data={shopData} />} />
          <Route path="/shop-item/:id" element={<ItemDetails data={shopData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
