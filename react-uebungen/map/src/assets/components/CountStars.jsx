import PropTypes from 'prop-types';
// import ReactHtmlParser from 'react-html-parser';

const fullStar = '<i class="fa-solid fa-star" style="color: #ffe000;"></i>';
const emptyStar = '<i class="fa-regular fa-star" style="color: #ffe000;"></i>';
const halfStar = '<i class="fa-regular fa-star-half-stroke" style="color: #fdff3f;"></i>';
const maxStars = 10;

const CountStars = ({ rate }) => {
  let splitRate = rate.includes('.') ? rate.split('.') : null;
  let fullStarLength = splitRate[0];
  let emptyStarLength = maxStars - splitRate[0];

  return (
    // <div>
    <div
      dangerouslySetInnerHTML={{
        __html: splitRate
          ? `${fullStar.repeat(fullStarLength)}${
              splitRate[1] >= 5 ? halfStar : emptyStar
            }${emptyStar.repeat(emptyStarLength - 1)}`
          : null,
      }}
    />
  );
};

CountStars.propTypes = {
  rate: PropTypes.string,
};

export default CountStars;
