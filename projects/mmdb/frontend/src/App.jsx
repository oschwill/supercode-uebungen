import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import { getInitialData } from './utils/fetchData';
import AddMovie from './pages/AddMovie';
import Details from './pages/Details';
import Favorites from './pages/Favorites';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} loader={getInitialData}>
      <Route index element={<Home />} loader={getInitialData} />
      <Route path="/add" element={<AddMovie />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/favorites" element={<Favorites />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
