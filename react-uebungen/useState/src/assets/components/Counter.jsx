import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Level-2_1</h2>
      <p className="output">{count}</p>
      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count - 1)}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
