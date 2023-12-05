import { useEffect, useState } from 'react';
import Form from '../components/Form';
import Output from '../components/Output';

import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/guestbook')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSetData = (data) => {
    const newItem = {};

    for (const item of data) {
      newItem[item[0]] = item[1];
    }

    newItem.firstName = newItem.firstName.replaceAll(/\s/g, '');
    newItem.lastName = newItem.lastName.replaceAll(/\s/g, '');
    newItem.created_at = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

    setData((cur) => [...cur, newItem]);
  };

  return (
    <main className={styles.main}>
      <Form onHandleSetData={handleSetData} />
      <Output data={data} setData={setData} />
    </main>
  );
};

export default Home;
