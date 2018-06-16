const express        = require('express');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const passport 			 = require("./config/passport");
const config				 = require("./config/extra-config");
const session        = require('express-session'); 


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

db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});
