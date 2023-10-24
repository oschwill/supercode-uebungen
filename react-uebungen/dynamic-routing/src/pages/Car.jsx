import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Car = ({ data }) => {
  const carId = useParams();
  const localCarData = data.filter((d) => String(d.id) === carId.id);

  return (
    <div className="car-detail">
      <p>{localCarData[0].CarMake}</p>
      <p>{localCarData[0].carModel}</p>
      <p>{localCarData[0].CarYear}</p>
    </div>
  );
};

Car.propTypes = {
  data: PropTypes.array,
};

export default Car;
