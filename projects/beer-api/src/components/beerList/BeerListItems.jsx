import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* CSS */
import './BeerListItems.css';

// const BeerListItems = ({ beer }) => {
//   return (
//     <div className="beer-items">
//       <div className="left-side">
//         <img src={beer.image_url} alt={beer.name} />
//       </div>
//       <div className="right-side">
//         <h2>{beer.name}</h2>
//         <p>{beer.tagline}</p>
//         <p>created by: {beer.name}</p>
//         <Link to={`/beer-detail/${beer._id}`}>Details</Link>
//       </div>
//     </div>
//   );
// };
const BeerListItems = ({ beerData }) => {
  return (
    <>
      {beerData &&
        beerData.map((beer) => {
          return (
            <div className="beer-items" key={beer._id}>
              <div className="left-side">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="right-side">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>created by: {beer.name}</p>
                <Link to={`/beer-detail/${beer._id}`}>Details</Link>
              </div>
            </div>
          );
        })}
    </>
  );
};

BeerListItems.propTypes = {
  beerData: PropTypes.array,
};
// BeerListItems.propTypes = {
//   beer: PropTypes.object,
// };

export default BeerListItems;
