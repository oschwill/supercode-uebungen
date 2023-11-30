import PropTypes from 'prop-types';
import { useRef } from 'react';

const Input = ({ onHandleNewInput }) => {
  const input = useRef();

  return (
    <article className="m-auto w-[50%] flex gap-8 pt-10 items-center">
      <input type="text" placeholder="Todo..." className="p-2" ref={input} />
      <button
        className=" bg-green-400 text-[2rem] w-[15%] hover:bg-green-800"
        onClick={() => onHandleNewInput(input.current.value)}
      >
        +
      </button>
    </article>
  );
};

Input.propTypes = {
  onHandleNewInput: PropTypes.func,
};

export default Input;
