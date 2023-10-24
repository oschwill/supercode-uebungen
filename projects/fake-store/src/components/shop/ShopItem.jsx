import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* CSS */
import './ShopItem.css';

const ShopItem = ({ item }) => {
  return (
    <div className="item" key={item.id}>
      <div className="image">
        <img src={item.image} alt={item.category} />
      </div>
      <p>{item.title}</p>
      <p>{item.price}</p>
      <Link to={`/shop-item/${item.id}`}>Show more</Link>
    </div>
  );
};

ShopItem.propTypes = {
  item: PropTypes.object,
};

export default ShopItem;
