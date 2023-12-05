import fs from 'fs/promises';
import fSystem from 'fs';
import { v4 } from 'uuid';

const dirPath = './database';

export const setup = () => {
  fs.access(dirPath)
    .then(() => console.log('Der Storage Ordner ist schon vorhanden'))
    .catch(() => {
      fSystem.mkdirSync(dirPath);
    });
};

export const getAllContent = () => {
  return fs.readdir(`${dirPath}`).then((files) => {
    const arr = [];
    for (const file of files) {
      arr.push(JSON.parse(fSystem.readFileSync(`${dirPath}/${file}`)));
    }

    return arr;
  });
};

export const saveContent = (content) => {
  content.id = v4();
  content.created_at = new Date().toJSON().slice(0, 10).replace(/-/g, '/');

  console.log(`${content.id}`);

  return fs.writeFile(`${dirPath}/${content.id}`, JSON.stringify(content));
};

export const deleteContent = (id) => {
  fSystem.unlinkSync(`${dirPath}/${id}`);
};
