import PropTypes from 'prop-types';
import Button from './Button';

import './InputMoney.css';

const InputMoney = ({ onSetMoney, inputMoney, onSetInputMoney }) => {
  function handleOnChangeInputMoney(value) {
    console.log(value);
    if (value.includes('-')) {
      // Clear input
      onSetInputMoney('');
      return;
    }

    onSetInputMoney(value);
  }

  return (
    <div className="input">
      <div>
        <label htmlFor="input-money"></label>
        <input
          type="number"
          id="input-money"
          min="0"
          placeholder="Betrag in Euro"
          value={inputMoney}
          onChange={(e) => handleOnChangeInputMoney(e.target.value)}
        />
      </div>
      <div>
        <Button buttonClass="einzahlen" onSetMoney={onSetMoney} inputMoney={Number(inputMoney)}>
          Einzahlen
        </Button>
        <Button buttonClass="auszahlen" onSetMoney={onSetMoney} inputMoney={Number(-inputMoney)}>
          Auszahlen
        </Button>
      </div>
    </div>
  );
};

InputMoney.propTypes = {
  onSetMoney: PropTypes.func,
  inputMoney: PropTypes.string,
  onSetInputMoney: PropTypes.func,
};

export default InputMoney;
