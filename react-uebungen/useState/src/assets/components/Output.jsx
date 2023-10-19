import PropTypes from 'prop-types';

const Output = ({ firstName, lastName, email }) => {
  return (
    <div className="output">
      <p>Vorname: {firstName}</p>
      <p>Nachname: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Output;

Output.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};
