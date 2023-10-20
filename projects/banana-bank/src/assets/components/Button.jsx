import PropTypes from 'prop-types';

const Button = ({ children, buttonClass, onSetMoney, inputMoney }) => {
  return (
    <button className={buttonClass} onClick={() => onSetMoney(inputMoney)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  buttonClass: PropTypes.string,
  onSetMoney: PropTypes.func,
  inputMoney: PropTypes.number,
};

export default Button;
