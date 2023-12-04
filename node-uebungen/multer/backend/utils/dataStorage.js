import fs from 'fs/promises';
import fSystem from 'fs';
import { v4 } from 'uuid';
import { fileTypeFromBuffer } from 'file-type';

// Erzeuge dirname
const dirPath = 'data';

export const setup = () => {
  fs.access(dirPath)
    .then(() => console.log('Der Storage Ordner ist schon vorhanden'))
    .catch(() => {
      fSystem.mkdirSync(dirPath);
      fSystem.mkdirSync(dirPath + '/dataBase');
      fSystem.mkdirSync(dirPath + '/uploads');
    });
};

export const saveBlog = (blog, file, res) => {
  // WRITE UPLOAD FILE!
  fileTypeFromBuffer(file.buffer)
    .then((data) => {
      const path = `${dirPath}/uploads/${v4()}.${data.ext}`;
      fs.writeFile(path, file.buffer);
      return path;
    })
    .then((_path) => {
      // CREATE BLOG ID ,IMAGE PATH AND DATE
      blog.id = v4();
      blog.headerLink = _path;

      blog.created_at = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

      // WRITE BLOG DATA!
      fs.writeFile(`${dirPath}/dataBase/${blog.id}`, JSON.stringify(blog));
    })
    .catch((err) => res.status(500).end(err));
};

export const getAllBlogs = () => {
  return fs.readdir(`${dirPath}/dataBase`).then((files) => {
    const arr = [];
    for (const file of files) {
      arr.push(JSON.parse(fSystem.readFileSync(`${dirPath}/dataBase/${file}`)));
    }

    return arr;
  });
};

export const getSingleBlog = (id, res) => {
  const singleData = JSON.parse(
    fSystem.readFileSync(`${dirPath}/dataBase/${id}`, { encoding: 'utf-8' })
  );

  console.log(singleData);
  res.json(singleData);
};
