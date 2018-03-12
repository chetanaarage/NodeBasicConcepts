var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./example.com.key'),
  cert: fs.readFileSync('./example.com.crt')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("Welcome to Node.js HTTPS server 443");
}).listen(8443);
