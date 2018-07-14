const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const passport 			 = require("./config/passport");
const config				 = require("./config/extra-config");
const session        = require('express-session'); 

// const DATABASE_URL = "postgres://oiakkjytnuroxm:97395421edfcd266fce4d29981527d9aed112509375ec44535b1823bb2262432@ec2-54-83-33-213.compute-1.amazonaws.com:5432/dclmb16fqthekg"
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});


const app            = express();
const PORT           = process.env.PORT || 3000;
const db             = require('./models');

app.set('views', path.join(__dirname, 'views'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Middleware

var isAuth 				 = require("./config/middleware/isAuthenticated");
var authCheck 		 = require('./config/middleware/attachAuthenticationStatus');

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); 

app.use(session({ secret: config.sessionKey, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(authCheck);


require('./routes')(app); //pass this express application into routes

module.exports = app;

db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 3000, function () {
    console.log("App running on port " + PORT + "!");
});
});
