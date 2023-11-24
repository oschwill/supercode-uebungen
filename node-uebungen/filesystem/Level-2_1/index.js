import fs from 'fs';

fs.readFile('./data.json', 'utf8', (error, data) => {
  if (error) {
    return console.log(err);
  }

  const jsonData = JSON.parse(data);

  if (fs.existsSync('./data.txt')) {
    fs.rmSync('./data.txt', { recursive: true, force: true });
  }

  jsonData.forEach((d) => {
    fs.writeFile(
      './data.txt',
      `${d.id} - ${d.title} \n${d.description}\n\n`,
      { flag: 'a+' },
      (err) => {
        if (err) {
          return console.log(err);
        }
      }
    );
  });
});
