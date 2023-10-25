import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* ICON */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

/* CSS */
import './DetailItem.css';

const DetailItem = ({ beerDetailData }) => {
  return (
    <div className="beer-detail">
      <img src={beerDetailData.image_url} alt="image" />
      <h2>{beerDetailData.name}</h2>
      <p className="tagline">{beerDetailData.tagline}</p>
      <div className="beer-brewed">
        <p>First brewed:</p>
        <p>{beerDetailData.first_brewed}</p>
      </div>
      <div className="beer-attenuation">
        <p>Attenuation level:</p>
        <p>{beerDetailData.attenuation_level}</p>
      </div>
      <p className="description">{beerDetailData.description}</p>
      <div className="arrow-button">
        <Link to="/beer-list">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            style={{ color: '#fff' }}
            className="arrow"
            size="2xl"
          />
        </Link>
      </div>
    </div>
  );
};

DetailItem.propTypes = {
  beerDetailData: PropTypes.object,
};

export default DetailItem;
