var db = require('../models');


exports.index = function(req, res) {
  db.User.findAll({}).then(function (dbUser) {

      console.log(dbUser);

      res.render('all-users', { dbUser });
  });
  // res.render('all-projects');
};

exports.user = function(req, res) {
  res.render('users/user');
}
//this is the users_controller.js file


exports.registrationPage = function(req,res) {
  res.render('users/registration', {
    layout: 'main-registration'
  });
};
//renders the registration page

exports.signOutUser = function(req,res) {
  req.logout();
  res.redirect("/");
};
//signs out users

// login
exports.loginUser = function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
};

// register a user:   

// if statement --> users are checked against existing db
// the else creates an object with the user/name/pw and stores as a new user object

exports.signUpUser = function(req,res) {

  db.User.findAll({
    where: {username: req.body.username}
  }).then(function(users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
    //At some point, make sure that only one user can be associated with an email.
    } 
     else {
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function() {
        res.send({redirect: '/'});
      }).catch(function(err) {
        res.json(err);
      });
    }
  })
};

var db  = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db



exports.getUser = function(req, res) {

    db.User.hasMany(db.Projects, {foreignKey: 'user_id'});

    // var userRoute = req.params.user_name.replace('-', ' ');
    // userRoute.replace(/\W+/g, '');
    // console.log('\n' + userRoute + '\n');



    db.User.findOne({
        where: {
            id: req.params.id
        },
        // include: [db.User]
    }).then(results => {
        // console.log('\n' + results + '\n');

        var userPercent = parseInt(results.user_amount) / parseInt(results.user_goal) * 100;

        function float(x) {
            if (x % 1 !== 0) {
                userPercent = Number.parseFloat(x).toFixed(1);
            }
        }

        console.log(float(userPercent));

        res.render('user', {
            projectName: results.project_name,
            ingredient_1: results.ingredient_1,
            ingredient_2: results.ingredient_2,
            ingredient_3: results.ingredient_3,
            ingredient_4: results.ingredient_4,
            username: results.username,
            imageUrl: results.image_url,
            projectAmount: results.project_amount,
            projectGoal: results.project_goal,
            projectPercent: projectPercent
        });
    })
    
    
};


