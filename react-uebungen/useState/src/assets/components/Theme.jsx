import { useState } from 'react';

import './Theme.css';

const Theme = () => {
  const [theme, setTheme] = useState(false);

  // Styles
  const styles = {
    backgroundColor: 'black',
  };

  return (
    <div className="secondMain" style={theme ? styles : null}>
      <h2 className={theme ? 'paragraph' : ''}>Level-2_2</h2>
      <p className={theme ? 'paragraph' : ''}>{theme ? 'Night' : 'Day'}</p>
      <button onClick={() => setTheme(!theme)}>
        {theme ? 'Change to Day' : 'Change to Night'}
      </button>
    </div>
  );
};

export default Theme;
