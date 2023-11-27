import http from 'http';
import fs from 'fs';

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error!!');
      return;
    }

    res.end(data);
  });
};

const notFound = 'PAGE NOT FOUND!!';

const requestHandler = (req, res) => {
  console.log(req.url);
  if (req.url === '/') {
    sendFile('./sites/home.html', res);
  } else if (req.url === '/about') {
    sendFile('./sites/about/about.html', res);
  } else if (req.url === '/contact') {
    sendFile('./sites/contact/contact.html', res);
  } else if (req.url === '/faq') {
    sendFile('./sites/faq/faq.html', res);
  } else {
    res.writeHead(404, {
      'Content-Length': Buffer.byteLength(notFound),
      'Content-Type': 'text/plain',
    });
    res.end(notFound);
  }
};

const server = http.createServer(requestHandler);
server.listen(9000, () => console.log('server gestartet'));
