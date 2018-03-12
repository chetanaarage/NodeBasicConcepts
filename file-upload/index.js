var express = require("express");
var app = express();

var path=require("path");
var bodyParser = require("body-parser");
var multer = require("multer");
//var upload = multer({ dest: 'uploads/'});

var port=3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var storage = multer.diskStorage({
  // destino del fichero
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  // renombrar fichero
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

app.use(express.static(path.join(__dirname,'public')))
app.get('/',function(req,res){
	res.send('hello world..!!!');
});

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname,'public/index.html'));
})
// app.post("/upload",upload.single("recfile"), function(req, res,next) {
//     res.send(req.file);
// });
app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});
app.listen(3000, function() {
    console.log("Listening on port %s...", port);
});