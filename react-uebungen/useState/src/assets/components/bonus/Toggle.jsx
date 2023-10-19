import { useState } from 'react';
import ToggleBar from './ToggleBar';

import './Toggle.css';

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="Toggle">
      <h2>Bonus_Level-1_1</h2>
      <ToggleBar getToggle={toggle} setToggle={setToggle} />
    </div>
  );
};

export default Toggle;
