var express = require('express');
var app = express();

// Use Jade
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// Use other things besides Jade
app.use(express.static(__dirname + "/public"));

// Home page!
app.get('/', function (req, res) {
   res.render('index');
});

// Ghost?!
var ghost = require('ghost');
ghost().then(function(ghostServer) {
   app.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
   ghostServer.start(app);
});


app.listen(3000);
console.log('Meow!');
