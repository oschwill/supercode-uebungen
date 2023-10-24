import PropTypes from 'prop-types';
import ShopItem from '../components/shop/ShopItem';
import Loader from '../components/Loader';

/* CSS */
import './ShopList.css';

const ShopList = ({ data }) => {
  return (
    <main>
      <div className="home">
        <h1>Willkommen</h1>
      </div>
      <div className="list">
        {data ? (
          data.map((d) => {
            return <ShopItem item={d} key={d.id} />;
          })
        ) : (
          <Loader />
        )}
      </div>
    </main>
  );
};

ShopList.propTypes = {
  data: PropTypes.array,
};

export default ShopList;
