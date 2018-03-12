// // var fs = require('fs');
// // var https = require('https');

// // var options = {
// //     requestCert: true, //This will request the client certificate
// //     rejectUnauthorized: true, //This will reject client certificates that are not signed by the CA
// //   key: fs.readFileSync('./example.com.key'),
// //   cert: fs.readFileSync('./example.com.crt')
// //   //ca: fs.readFileSync(.ca) //This is crucial to ensure only people with the same root CA can connect
// // }

// var express = require('express');
// var https = require('https');
// var http = require('http');
// var fs = require('fs');
// var app = express();

// var options = {
//   key: fs.readFileSync('./example.com.key'),
//   cert: fs.readFileSync('./example.com.crt')
// };

// http.createServer(app).listen(8080);
// https.createServer(options, app).listen(8443);
// // var app = function (req, res) {
// //   res.writeHead(200);
// //   res.end("hello world\n");
// // }
// // var server = https.createServer(options, app);
// // // This bit is for testing
// // server.on('secureConnection', function (cleartextStream, encryptedStream) {
// //     if(!cleartextStream.authorized){
// //         console.error("TLS error: " + cleartextStream.authorizationError)
// //     }
// // })
// // // The testing bit ends here
// // server.listen(443)

var express = require('express');
var forceSSL = require('express-force-ssl');
var fs = require('fs');
var http = require('http');
var https = require('https');
const bodyParser=require('body-parser');
 
var ssl_options = {
  key: fs.readFileSync('./example.com.key'),
  cert: fs.readFileSync('./example.com.crt')
  //: fs.readFileSync('./keys/intermediate.crt')
};
 
var app = express();
var server = http.createServer(app);
var secureServer = https.createServer(ssl_options, app);
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(forceSSL);
//p.use(app.router);
 
secureServer.listen(8443,function(req,res){
	console.log("hello https secure port")
})
server.listen(80)