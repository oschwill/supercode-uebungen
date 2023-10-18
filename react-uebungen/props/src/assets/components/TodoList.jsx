import TodoItem from './TodoItem';

const todoArr = [
  {
    description: 'Buy Groceries',
  },
  {
    description: 'Send Email',
  },
  {
    description: 'Finish Assignment',
  },
  {
    description: 'Write Blog',
  },
  {
    description: 'Bake Cake',
  },
];

const TodoList = () => {
  return (
    <main>
      <h1>Level-1_1</h1>
      <ul>
        {todoArr.map((item, index) => (
          <TodoItem listItem={item} key={index} />
        ))}
      </ul>
    </main>
  );
};

export default TodoList;
