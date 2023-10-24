import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
  return (
    <main>
      <div className="home">
        <h1>Willkommen im Shop</h1>
        <Link to="/shop">Zum Shop</Link>
      </div>
    </main>
  );
};

export default Home;
