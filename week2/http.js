//Program to demonstrate http module
var ht = require('http');//including https module
ht.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
  }).listen(3000);//output displayed on this port i.e,http://localhost:3000

  /* output:
  Hello World */