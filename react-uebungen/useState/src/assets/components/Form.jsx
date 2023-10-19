import { useState } from 'react';
import Output from './Output';

import './Form.css';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="main">
      <h1>LEVEL-1_6</h1>
      <form>
        <label htmlFor="firstname"></label>
        <input
          type="text"
          id="firstname"
          onChange={(event) => setFirstName(event.target.value)}
          value={firstName}
        />
        <label htmlFor="lastname"></label>
        <input
          type="text"
          id="lastname"
          onChange={(event) => setLastName(event.target.value)}
          value={lastName}
        />
        <label htmlFor="email"></label>
        <input
          type="text"
          id="email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
      </form>
      <Output firstName={firstName} lastName={lastName} email={email} />
    </div>
  );
};

export default Form;
