var express = require('express');
var app = express();
var path = require("path");

app.set('view engine', 'pug');

app.get('/', (req,res) => {
 res.render('TechWearPage')
})

//app.use('/home', express.static('Techwear-Webpage'));

app.listen(8080, () =>{
  console.log("Server running on port 8080");
});
