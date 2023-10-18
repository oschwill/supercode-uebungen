import PropTypes from 'prop-types';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.img} alt={product.description} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>BUY NOW</button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
};

export default ProductItem;
