import HomeBeer from '../components/home/HomeBeer';

/* IMAGES */
import allBeersImg from '../assets/images/all_beers.jpeg';
import randomBeerImg from '../assets/images/random_beers.jpeg';

/* CSS */
import './Home.css';

const Home = () => {
  return (
    <main>
      <section className="beers">
        <HomeBeer image={allBeersImg} path="/beer-list">
          All Beers
        </HomeBeer>
        <HomeBeer image={randomBeerImg} path="/random-beer">
          Random Beer
        </HomeBeer>
      </section>
    </main>
  );
};

export default Home;
