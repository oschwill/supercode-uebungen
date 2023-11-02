import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const maxStars = 10;

const CountStars = ({ rate }) => {
  let splitRate = rate.includes('.') ? rate.split('.') : null;
  let fullStarLength = splitRate[0];
  let emptyStarLength = maxStars - splitRate[0];

  return (
    <div>
      {[...Array(Number(fullStarLength))].map((e, i) => (
        <FontAwesomeIcon icon={faStar} style={{ color: '#ffd500' }} key={i} />
      ))}
      {splitRate[1] >= 5 ? (
        <FontAwesomeIcon icon={faStarHalfStroke} style={{ color: '#ffd500' }} />
      ) : (
        <FontAwesomeIcon icon={faStar} />
      )}
      {[...Array(Number(emptyStarLength - 1))].map((e, i) => (
        <FontAwesomeIcon icon={faStar} key={i} />
      ))}
    </div>
  );
};

CountStars.propTypes = {
  rate: PropTypes.string,
};

export default CountStars;
