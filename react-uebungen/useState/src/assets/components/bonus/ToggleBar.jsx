import PropTypes from 'prop-types';

const ToggleBar = ({ getToggle, setToggle }) => {
  const styles = {
    display: 'block',
  };

  return (
    <div className="toggle-bar">
      <div className="top">
        <p>Why is React great?</p>
        <button onClick={() => setToggle(!getToggle)}>{getToggle ? '-' : '+'}</button>
      </div>
      <div className="bottom" style={getToggle ? styles : null}>
        <p>Fast Learning Curve</p>
      </div>
    </div>
  );
};

ToggleBar.propTypes = {
  getToggle: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default ToggleBar;
