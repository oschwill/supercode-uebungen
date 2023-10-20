import { useState } from 'react';
import InputMoney from './InputMoney';

const MainBank = () => {
  const [money, setMoney] = useState(0);
  const [inputMoney, setInputMoney] = useState('');

  function handleSetMoney(value) {
    let result = money + value;
    if (result < 0) {
      alert('Du kannst nicht mehr abbuchen');
      return;
    }
    setMoney(result);
  }

  function handleSetInputMoney(value) {
    setInputMoney(value);
  }

  return (
    <main className="konto">
      <div className="geldbetrag">
        <p className="saldo">{Number.parseFloat(money).toFixed(2)}</p>
      </div>
      <InputMoney
        onSetMoney={handleSetMoney}
        inputMoney={inputMoney}
        onSetInputMoney={handleSetInputMoney}
      />
    </main>
  );
};

export default MainBank;
