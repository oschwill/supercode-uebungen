import http from 'http';
import fs from 'fs';

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error!!');
      return;
    }

    if (path.includes('.svg')) {
      res.writeHead(200, { 'Content-Type': 'image/svg+xml' });
    }

    res.end(data);
  });
};

const requestHandler = (req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    sendFile('./sites/home.html', res);
  } else if (req.url === '/about') {
    sendFile('./sites/about.html', res);
  } else if (req.url === '/works') {
    sendFile('./sites/works.html', res);
  } else if (req.url === '/categories') {
    sendFile('./sites/categories.html', res);
  } else if (req.url === '/testimony') {
    sendFile('./sites/testimony.html', res);
  } else {
    const filePath = './assets' + req.url;
    sendFile(filePath, res);
  }
};

const server = http.createServer(requestHandler);
server.listen(9000, () => console.log('server gestartet'));
