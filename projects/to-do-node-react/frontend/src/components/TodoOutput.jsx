import PropTypes from 'prop-types';

const TodoOutput = ({ data, onHandleChangeStatus }) => {
  return (
    <article className="pt-8 flex flex-col items-center justify-center gap-y-4">
      {data && data.length > 0 ? (
        data.map((item) => {
          return (
            <div
              className={`w-[85%] bg-gray-400 p-4 ${item.hasCompleted && 'bg-green-700'}`}
              key={item.id}
              onClick={() =>
                onHandleChangeStatus({
                  id: item.id,
                  content: item.content,
                  hasCompleted: !item.hasCompleted,
                })
              }
            >
              <p className={`text-[1.5rem] font-bold ${item.hasCompleted && 'opacity-5'}`}>
                {item.content}
              </p>
            </div>
          );
        })
      ) : (
        <p>NO TODO ITEM...</p>
      )}
    </article>
  );
};

TodoOutput.propTypes = {
  data: PropTypes.array,
  onHandleChangeStatus: PropTypes.func,
};

export default TodoOutput;
