import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 9000;
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, '/sites');

app.use((req, res, next) => {
  console.log(req.method, req.url);

  next();
});

app.use(express.static(dirPath));

app.get('*', (req, res) => {
  // res.status(404).send('404 NOT FOUND');
  // redirect zu index.html
  res.sendFile('index.html', { root: dirPath });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log('LISTENING ON PORT', PORT);
});
