import { useEffect, useState } from 'react';
import Input from '../components/Input';
import TodoOutput from '../components/TodoOutput';
import { useLoaderData } from 'react-router-dom';
import { modifyTodoData, setTodoData } from '../utils/dataModel';

let lastID = 1;

const Home = () => {
  const [data, setData] = useState([]);
  const loaderData = useLoaderData();

  useEffect(() => {
    setData([...loaderData]);
    // Wir setten nach dem Reload die letzte ID
    lastID = loaderData && loaderData.length > 0 && loaderData[loaderData.length - 1].id;
  }, [loaderData]);

  const handleNewInput = (input) => {
    if (!input || input === '') {
      return;
    }

    lastID += 1;

    const newData = {
      id: lastID,
      content: input,
      hasCompleted: false,
    };

    setTodoData(setData, newData);
  };

  const handleChangeStatus = (editData) => {
    modifyTodoData(setData, editData);
  };

  return (
    <section className="w-[900px] h-screen m-auto bg-slate-300">
      <Input onHandleNewInput={handleNewInput} />
      <TodoOutput data={data} onHandleChangeStatus={handleChangeStatus} />
    </section>
  );
};

export default Home;
