// Dependencies
// ============
const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser');

// Express settings
// ================

// instantiate our app as an instance of express
const app            = express();

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));

//allow sessions
// app.use(session({ secret: 'booty Mctootie', cookie: { maxAge: 60000 }}));
// app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Middleware

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); //static routes are routesd to the public folders




require('./routes')(app); //pass this express application into routes

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  })
});


// our module gets exported as app.
module.exports = app;


// Where's the listen? Open up bin/www, and read the comments.
