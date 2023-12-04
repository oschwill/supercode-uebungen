import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { getAllBlogs, getSingleBlog, saveBlog, setup } from './utils/dataStorage.js';

const PORT = 9000;
const app = express();

const storage = multer.memoryStorage();
const upload = multer({ storage });
// CREATE FOLDERS!
setup();

app.use(cors());
app.use(express.json());

// STATIC FILES
app.use('/data/uploads', express.static('data/uploads'));

/* ROUTES */
// get all blog
app.get('/api/blog', (req, res) => {
  getAllBlogs()
    .then((data) => res.json(data))
    .catch(() => res.status(500).end());
});

// create blog
app.post('/api/blog', upload.single('header-img'), (req, res) => {
  const blog = req.body;
  if (typeof blog === 'undefined' || typeof req.file === 'undefined') {
    res.status(500).end('NO INPUT DATA');
    return;
  }

  saveBlog(blog, req.file, res);
  res.end();
});

// get single Blog
app.get('/api/blog/:id', (req, res) => {
  getSingleBlog(req.params.id, res);
});

app.listen(PORT, () => console.log(`LISTENING ON PRT ${PORT}`));
