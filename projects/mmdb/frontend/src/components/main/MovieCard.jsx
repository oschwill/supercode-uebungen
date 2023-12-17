import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }) => {
  return (
    <article className="grid grid-cols-3 gap-16">
      {data && data.length > 0 ? (
        data.map((d) => {
          return (
            <Link to={`/details/${d._id}`} key={d._id}>
              <div className="flex flex-col">
                <img
                  src={`${
                    d.poster ? d.poster : 'https://wiki.dave.eu/images/4/47/Placeholder.png'
                  }`}
                  alt={d.title}
                />
                <p className="text-primaryFontColor">{d.title}</p>
                <p className="text-secondaryFontColor">{d.director}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="flex justify-center col-span-full">
          <p className="text-center text-[3rem] text-white font-bold ">NO DATA!</p>
        </div>
      )}
    </article>
  );
};

MovieCard.propTypes = {
  data: PropTypes.array,
};

export default MovieCard;
