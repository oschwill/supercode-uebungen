import fs from 'fs';
import { appendNewContent } from './function.js';

const dir = './subfolder';

/* Erstelle mithilfe des Node.js Filesystems einen Unterordner innerhalb deines Projektordners. 
In diesem Ordner soll die Datei später angelegt werden. */
fs.mkdir(dir, { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }

  /**
   * Schreibe eine Funktion, die einen Parameter annimmt.
Diese soll prüfen, ob die txt-Datei bereits existiert. Wenn dies nicht der Fall ist, soll sie erstellt werden.
In die Datei soll der Inhalt des Parameters geschrieben werden. Denk daran, diesen auch mitzuliefern, wenn du die Funktion aufrufst.
Existiert die Datei bereits? Dann füge der bereits bestehenden Datei den Inhalt des Parameters in einer neuen Zeile hinzu.
   */
  appendNewContent('Mein neuer Text bitte!', dir);
});
