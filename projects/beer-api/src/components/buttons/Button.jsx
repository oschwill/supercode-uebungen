import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ children, image, path }) => {
  return (
    <Link to={path}>
      {image && <img src={image} alt="image" />}
      <button>{children && children}</button>
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
