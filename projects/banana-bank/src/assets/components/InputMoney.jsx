import PropTypes from 'prop-types';
import Button from './Button';

import './InputMoney.css';

const InputMoney = ({ onSetMoney, inputMoney, onSetInputMoney }) => {
  // const [inputMoney, setInputMoney] = useState('');

  return (
    <div className="input">
      <div>
        <label htmlFor="input-money"></label>
        <input
          type="number"
          id="input-money"
          placeholder="Betrag in Euro"
          value={inputMoney}
          onChange={(e) => onSetInputMoney(e.target.value)}
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
