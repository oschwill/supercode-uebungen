import { BrowserRouter, Routes, Route } from 'react-router-dom';

import data from './data/carsData.json';

import './App.css';
import CarsList from './pages/CarsList';
import { useState } from 'react';
import { useEffect } from 'react';
import Car from './pages/Car';

function App() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    setCarData(data);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CarsList data={carData} />} />
          <Route path="/car/:id" element={<Car data={carData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
