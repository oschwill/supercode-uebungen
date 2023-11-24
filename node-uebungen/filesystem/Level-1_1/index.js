import fs from 'fs';

const dir = './assets';

/* Ändere den Textinhalt der Datei "blog1.txt" in “Ich bin ein Webdeveloper” */
fs.readFile('./blog1.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  let newContent = data.replace(/Hello World/g, 'Ich bin ein Webdeveloper');

  fs.writeFile('./blog1.txt', newContent, 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
  });
});

/* Erstelle eine neue Datei "blog2.txt" und trage dort einen beliebigen Text ein. */
fs.writeFile('./blog2.txt', 'beliebiger Text und so', 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});

/* Überprüfe, ob der Ordner "assets" bereits existiert. Falls ja, lösche diesen. */
if (fs.existsSync(dir)) {
  fs.rmSync(dir, { recursive: true, force: true });
}

/* Erstelle einen neuen Ordner "assets". */
fs.mkdir(dir, { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
});

/* Überprüfe, ob die Datei "delete.txt" bereits existiert. Falls ja, lösche diese. */
if (fs.existsSync(`${dir}/delete.txt`)) {
  fs.rmSync(`${dir}/delete.txt`, { recursive: true, force: true });
}

/* Erstelle eine Datei namens „delete.txt“. */
fs.writeFile(`${dir}/delete.txt`, 'delete ', 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});

/* Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein. Benenne die Datei anschließend in "HelloWorld.txt" um. */
fs.writeFile('./Hello.txt', 'hello text und so ', 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});

/* Erstelle eine Datei namens "Hello.txt" und trage dort einen beliebigen Text ein. Benenne die Datei anschließend in "HelloWorld.txt" um. */
fs.rename('./Hello.txt', './HelloWorld.txt', (err) => {
  if (err) {
    return console.log(err);
  }
});
