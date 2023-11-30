const url = 'http://localhost:9000/api/todo';

export const getTodoData = () => {
  return fetch(url).then((response) => response.json());
};

export const setTodoData = (setData, newData) => {
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newData),
  }).then((response) => {
    if (response.ok) {
      setData((cur) => [...cur, newData]);
    }
  });
};

export const modifyTodoData = (setData, editData) => {
  fetch(url, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(editData),
  }).then((response) => {
    if (response.ok) {
      console.log('first');
      setData((cur) => cur.map((c) => (c.id === editData.id ? editData : c)));
    }
  });
};
