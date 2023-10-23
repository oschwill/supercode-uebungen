import Header from '../components/header/Header';
import Button from '../components/main/Button';

import './Home.css';

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="top"></div>
        <div className="bottom">
          <h2>Welcome to my simple Blog</h2>
          <Button path="/blog">Go to articles</Button>
        </div>
      </main>
    </div>
  );
};

export default Home;
