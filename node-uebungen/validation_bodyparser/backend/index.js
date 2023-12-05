import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { deleteContent, getAllContent, saveContent, setup } from './utils/dataModel.js';
import { schema } from './utils/validationModel.js';

const PORT = 9000;
const app = express();

app.use(cors());
app.use(express.json());
const upload = multer();

setup();

app.get('/api/guestbook', (req, res) => {
  getAllContent()
    .then((data) => {
      res.json(data);
    })
    .catch(() => res.status(500).end());
});

app.post('/api/guestbook', upload.none(), (req, res) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(418).json({ message: error.message });
    return;
  }

  saveContent(value)
    .then(() => res.end())
    .catch((err) => {
      res.json({
        message: 'error beim Schreiben der Daten',
        code: err,
      });
    });
});

app.delete('/api/guestbook/:id', upload.none(), (req, res) => {
  const id = req.params.id;
  deleteContent(id);
  res.end();
});

app.listen(PORT, () => console.log(`LISTENING ON POCHT ${PORT}`));
