import fs from 'fs/promises';

export const setup = () => {
  fs.access('./planes.json')
    .then((data) => console.log(data))
    .catch((err) => fs.writeFile('./planes.json', '[]'));
};

export const allPlanes = () => {
  return fs.readFile('./planes.json', { encoding: 'utf8' }).then((data) => JSON.parse(data));
};

export const savePlane = (plane) => {
  allPlanes()
    .then((data) => {
      data.push(plane);
      console.log(data);
      return data;
    })
    .then((array) => fs.writeFile('./planes.json', JSON.stringify(array)));
};

export const modifyPlane = (plane, id) => {
  allPlanes()
    .then((data) => {
      try {
        if (!data.some((d) => d.id === id)) {
          throw new Error('ID IST NICHT VORHANDEN!');
        }

        const newData = data.map((d) => {
          return d.id === id ? { ...plane, id: id } : d;
        });

        return newData;
      } catch (error) {
        console.log('FHELER BEIM ÄNDERN DER DATEN', error);
      }
    })
    .then((array) => {
      fs.writeFile('./planes.json', JSON.stringify(array))
        .then(() => {
          console.log('DATEN ERFOLGREICH GELÖSCHT!');
        })
        .catch((err) => console.log(err));
    });
};

export const deletePlane = (id) => {
  allPlanes()
    .then((data) => {
      try {
        if (!data.some((d) => d.id === id)) {
          throw new Error('ID IST NICHT VORHANDEN!');
        }

        const newData = data.filter((d) => {
          return d.id !== id;
        });
        return newData;
      } catch (error) {
        console.log(`FEHLER BEIM ÄNDERN DER DATEN ${error}`);
        return;
      }
    })
    .then((array) => {
      fs.writeFile('./planes.json', JSON.stringify(array))
        .then(() => {
          console.log('DATEN ERFOLGREICH GELÖSCHT!');
        })
        .catch((err) => console.log(err));
    });
};

export const getSpecificPlane = (id, res) => {
  return allPlanes().then((data) => {
    try {
      if (!data.some((d) => d.id === id)) {
        throw new Error('ID IST NICHT VORHANDEN!');
      }

      const singlePlane = data.find((cur) => cur.id === id);

      res.json(singlePlane);
    } catch (error) {
      console.log('PLANE NICHT VORHANDEN', error);
      res.end('PLANE NICHT VORHANDEN');
    }
  });
};
