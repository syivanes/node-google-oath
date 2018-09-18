const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  const url = req.url;

  if(url === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    fs.readFile('./google-pasta.html', null, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.write('something went wrong');
      } else {
        res.write(data)
      }
      // console.log("response url: " + res.url);
      res.end();
    })
  } else if (url === '/credentials.js') {
    fs.readFile('./credentials.js', null, function (err, data) {
      res.write(data)
      res.end()
    })
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

