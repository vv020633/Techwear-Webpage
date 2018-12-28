const express = require('express');
const app = express();
//const path = require("path");
app.use(express.static('public'));
//app.use(express.static('views'));
//app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
 res.render('index')
})

//app.use('/home', express.static('Techwear-Webpage'));

app.listen(8080, function() {
  console.log("Server running on port 8080");
});
