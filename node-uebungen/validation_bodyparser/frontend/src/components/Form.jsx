import PropTypes from 'prop-types';
import styles from './Form.module.css';
import { useState } from 'react';

const Form = ({ onHandleSetData }) => {
  const [errorHandler, setErrorHandler] = useState(null);

  const handleFormData = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    fetch('http://localhost:9000/api/guestbook', {
      method: 'POST',
      body: form,
    })
      .then((response) => {
        setErrorHandler(null);
        if (response.ok) {
          onHandleSetData(form);
          return;
        }

        return response.json();
      })
      .then((data) => {
        setErrorHandler(data.message);
      });
  };

  return (
    <section className={styles.section}>
      <article>
        <form className={styles.form} onSubmit={handleFormData}>
          <div>
            <label htmlFor="firstName"></label>
            <input type="text" name="firstName" id="firstName" placeholder="Vorname" />
          </div>
          <div>
            <label htmlFor="lastName"></label>
            <input type="text" name="lastName" id="lastName" placeholder="Nachname" />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input type="email" name="email" id="email" placeholder="E-Mail" />
          </div>
          <div>
            <label htmlFor="content"></label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              placeholder="Nachricht"
            ></textarea>
          </div>
          <button style={{ padding: '5px', fontSize: '1.5rem', fontWeight: 'bold' }}>
            ABSENDEN
          </button>
          {errorHandler && (
            <p style={{ backgroundColor: 'red', color: 'white', padding: '5px' }}>{errorHandler}</p>
          )}
        </form>
      </article>
    </section>
  );
};

Form.propTypes = {
  onHandleSetData: PropTypes.func,
};

export default Form;
