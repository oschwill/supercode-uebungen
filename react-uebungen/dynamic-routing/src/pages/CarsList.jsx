import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarsList = ({ data }) => {
  return (
    <main>
      <div className="top">
        <h1>SuperCarList</h1>
        <a href="#">Home</a>
      </div>
      <div className="grid">
        {data?.map((car) => {
          return (
            <div className="car" key={car.id}>
              <h1>{car.carModel}</h1>
              <Link to={`/car/${car.id}`}>Read more</Link>
            </div>
          );
        })}
      </div>
    </main>
  );
};

CarsList.propTypes = {
  data: PropTypes.array,
};

export default CarsList;
