import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeButton = ({ logo }) => {
  return (
    <div className="bottom-button">
      <Link to="/">
        <button>
          <img src={logo} alt="logo" />
        </button>
      </Link>
    </div>
  );
};

HomeButton.propTypes = {
  logo: PropTypes.string,
};

export default HomeButton;
