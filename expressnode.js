const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true});
//require express packages
app.use(express.static('public'));
//app.use(bodyParser.json());

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
app.post('/', urlencodedParser, function(req, res){
  console.log(req.body);
  res.render('index',{qs: req.query});
});


app.listen(8080, function () {
  console.log("Server running on port 8080");
});
