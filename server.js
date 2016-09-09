var express = require("express");

var app = express();

var fs = require('fs');
app.engine('html', function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    var rendered = content.toString();
    return callback(null, rendered);
  });
});
app.set('views', './dist');
app.set('view engine', 'html');

app.use("/scripts", express.static("dist/scripts"));
app.use("/styles", express.static("dist/styles"));
app.use("/images", express.static("dist/images"));
app.set('trust proxy', true);
app.disable("x-powered-by");

app.get("/", function(req, res){
  res.render("index");
});
app.get("/favicon.ico", function(req, res){
  res.sendFile(__dirname + "/dist/favicon.ico");
});
app.get("/humans.txt", function(req, res){
  res.sendFile(__dirname + "/dist/humans.txt");
});

app.listen((process.env.PORT || 3000), function(){
  console.log("Express on %s", (process.env.PORT || 3000));
});
