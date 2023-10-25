import PropTypes from 'prop-types';
// import BeerListItems from '../components/beerList/BeerListItems';

/* imag */
import logo from '../assets/images/Logo.png';

/* CSS */
import './BeerList.css';
import HomeButton from '../components/buttons/HomeButton';
import Pagination from '../components/beerList/Pagination';

const BeerList = ({ beerData }) => {
  console.log(beerData);
  return (
    <main>
      <section className="beer-list" id="ark">
        <div>
          <Pagination itemsPerPage={5} beerData={beerData} />
        </div>
      </section>
      <HomeButton logo={logo} />
    </main>
  );
};

BeerList.propTypes = {
  beerData: PropTypes.array,
};

export default BeerList;
