import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Opening from './pages/Opening';
import Galery from './pages/Galery';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/opening" element={<Opening />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
