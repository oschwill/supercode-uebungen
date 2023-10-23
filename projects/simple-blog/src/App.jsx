import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* DATA */
import { blogData } from './data/blogData';

import './App.css';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList blogData={blogData} />} />
          {blogData.map((data) => {
            return (
              <Route
                path={`/detail/${String(data.id)}`}
                key={data.id}
                element={<BlogDetail data={data} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
