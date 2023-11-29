import express from 'express';
import {
  allPlanes,
  deletePlane,
  getSpecificPlane,
  modifyPlane,
  savePlane,
  setup,
} from './utils/filestorage.js';
const PORT = 9999;
const app = express();

setup();

app.use(express.json());

app.get('/api/planes', (req, res) => {
  allPlanes().then((planes) => res.json(planes));
});

// get single plane
app.get('/api/planes/:id', (req, res) => {
  const id = req.params.id;
  getSpecificPlane(id, res);
});

// add new plane
app.post('/api/planes', (req, res) => {
  //ein neues Flugzeug speichern
  const plane = req.body;
  savePlane(plane);
  res.end();
});

// modify plane by id
app.put('/api/planes/:id', (req, res) => {
  const plane = req.body;
  const id = req.params.id;
  modifyPlane(plane, id);
  res.end();
});

// delete plane by id
app.delete('/api/planes/:id', (req, res) => {
  const id = req.params.id;
  deletePlane(id);

  res.end();
});

app.listen(PORT, () => console.log(PORT));
