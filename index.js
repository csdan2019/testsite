var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT);
app.use(express.static('views/images')); 
//app.use(express.static('views/css'));
app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('home') //We can omit the .handlebars extension as we do below
});
app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/background', function(req, res) {
    res.render('background');
});

app.get('/resume', function(req, res) {
	
    res.render('resume');
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});


app.listen(app.get('port'), function(){
  console.log('Express started on ' + app.get('port') + '; press Ctrl-C to terminate.');
});