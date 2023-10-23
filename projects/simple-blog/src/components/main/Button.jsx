import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const Button = ({ children, path }) => {
  return (
    <Link className="button" to={path}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  path: PropTypes.string,
};

export default Button;
