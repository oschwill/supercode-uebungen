import PropTypes from 'prop-types';

const TodoItem = ({ listItem }) => {
  return <li>{listItem.description}</li>;
};

TodoItem.propTypes = {
  listItem: PropTypes.object,
};

export default TodoItem;
