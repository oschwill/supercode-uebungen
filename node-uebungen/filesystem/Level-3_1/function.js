import fs from 'fs';

const file = 'text.txt';

export const appendNewContent = (_content, dir) => {
  const path = `${dir}/${file}`;
  if (fs.existsSync(path)) {
    fs.writeFile(path, _content + '\n', { flag: 'a+' }, (err) => {
      if (err) {
        return console.log(err);
      }
    });

    return console.log('SUCCESS');
  }

  fs.writeFile(path, _content + '\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
};
