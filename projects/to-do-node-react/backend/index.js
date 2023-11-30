import express from 'express';
import cors from 'cors';
import { getAllTodo, modifyTodo, saveTodo, setup } from './utils/dataModel.js';

const PORT = 9000;
const app = express();

setup();

app.use(cors());
app.use(express.json());

app.get('/api/todo', (req, res) => {
  getAllTodo().then((data) => res.json(data));
});

app.post('/api/todo', (req, res) => {
  const todo = req.body;
  saveTodo(todo);
  res.end();
});

app.put('/api/todo', (req, res) => {
  const todo = req.body;
  modifyTodo(todo);
  res.end();
});

app.listen(PORT, () => console.log(`LISTEN ON POCHT ${PORT}`));
