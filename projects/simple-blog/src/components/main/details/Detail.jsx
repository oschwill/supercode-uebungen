import PropTypes from 'prop-types';

/* CSS */
import './Detail.css';

const Detail = ({ data }) => {
  return (
    <main>
      <div className="blog-detail">
        <img src={data.img_url} alt={data.author} />
        <div className="content">
          <div>
            <p>{data.author}</p>
            <p>{data.published_date}</p>
          </div>
          <p className="description">{data.description}</p>
          <p className="author">by {data.author}</p>
        </div>
      </div>
    </main>
  );
};

Detail.propTypes = {
  data: PropTypes.object,
};

export default Detail;
