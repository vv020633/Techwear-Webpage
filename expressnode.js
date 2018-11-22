var express = require('express');
var app = express();
var path = require("path");
//require express packages
app.use(express.static('public'));
//Middleware
app.set('view engine', 'ejs');
//set up template engine
//app.get('/', function (req,res) {
 //res.sendFile(__dirname +'public/index.html');
//})
app.get('/', function (req,res) {
 res.render('index');
 //res.render used instead of res.send when working with a templating language (ejs)
})


app.listen(8080, function () {
  console.log("Server running on port 8080");
});
