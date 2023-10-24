import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

/* CSS */
import './ItemDetails.css';
import { useEffect } from 'react';
import { useState } from 'react';

const fetchUrl = 'https://fakestoreapi.com/products';

const ItemDetails = ({ data }) => {
  const [detailData, setDetailData] = useState([]);
  const itemId = useParams();

  useEffect(() => {
    data
      ? setDetailData(data.filter((d) => String(d.id) === itemId.id))
      : fetch(fetchUrl)
          .then((res) => res.json())
          .then((data) => setDetailData(data.filter((d) => String(d.id) === itemId.id)))
          .catch((error) => console.log(error));
  }, [itemId.id, data]);

  return (
    <main>
      {detailData[0] && (
        <div className="item-details">
          <Link to="/">Back to Home</Link>
          <div className="image">
            <img src={detailData[0].image} alt={detailData[0].title} />
            <p className="image-price">${detailData[0].price}</p>
          </div>
          <p className="title">{detailData[0].title}</p>
          <p className="description">{detailData[0].description}</p>
        </div>
      )}
    </main>
  );
};

ItemDetails.propTypes = {
  data: PropTypes.array,
};

export default ItemDetails;
