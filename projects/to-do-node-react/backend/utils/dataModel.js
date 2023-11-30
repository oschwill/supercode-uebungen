import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Erzeuge dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, '../data/');
// Erzeuge Daten Datei
const dataFile = 'data.json';
const dataBasePath = `${dirPath}${dataFile}`;

export const setup = () => {
  fs.access(dataBasePath)
    .then((data) => console.log(data))
    .catch(() => fs.writeFile(dataBasePath, '[]'));
};

export const getAllTodo = () => {
  return fs
    .readFile(dataBasePath, { encoding: 'utf8' }, (err, data) => {
      if (err) {
        console.log(err);
      }
    })
    .then((data) => JSON.parse(data));
};

export const saveTodo = (todo) => {
  if (todo && todo !== '') {
    // write todo
    fs.access(dataBasePath)
      .then(() => {
        getAllTodo()
          .then((data) => {
            data.push(todo);
            return data;
          })
          .then((array) => {
            fs.writeFile(dataBasePath, JSON.stringify(array), (err) => {
              if (err) {
                console.log(err);
              }
            });

            return console.log('ITEM EINGETRAGEN!!');
          });
      })
      .catch((err) => console.log(err));
  }
};

export const modifyTodo = (todo) => {
  getAllTodo()
    .then((data) => {
      try {
        if (!data.some((d) => d.id === todo.id)) {
          throw new Error('ID IST NICHT VORHANDEN!');
        }

        const newData = data.map((d) => {
          return d.id === todo.id ? { ...todo } : d;
        });

        return newData;
      } catch (error) {
        console.log(error);
      }
    })
    .then((array) => {
      fs.writeFile(dataBasePath, JSON.stringify(array))
        .then(() => {
          console.log('DATEN ERFOLGREICH MODIFIZIERT');
        })
        .catch((err) => console.log(err));
    });
};
