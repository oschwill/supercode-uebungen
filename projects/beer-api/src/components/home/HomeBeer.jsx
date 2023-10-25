import PropTypes from 'prop-types';

/* CSS */
import './HomeBeer.css';
import Button from '../buttons/Button';

const HomeBeer = ({ children, image, path }) => {
  return (
    <div className="home-beer">
      <Button image={image} path={path}>
        {children}
      </Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nesciunt quae rerum
        veritatis? Nesciunt eos blanditiis cupiditate repellat recusandae ex laboriosam sapiente
        accusantium commodi mollitia perspiciatis maxime.
      </p>
    </div>
  );
};

HomeBeer.propTypes = {
  children: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
};

export default HomeBeer;
