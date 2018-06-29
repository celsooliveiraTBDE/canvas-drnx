var db = require('../models');


exports.index = function (req, res) {

  db.User.findAll({}).then(dbUser => {
    res.render('all-users', {
      dbUser
    });
  })
};


exports.getUser = function (req, res) {

  db.User.findOne({
    where: {
      id: req.params.id
    },
    include: [db.Project], 
  }).then(function (dbUser) {
    // res.json(dbUser);
    console.log('dbUSER --', dbUser)
    res.render('users/user', {
      name: dbUser.name,
      about_me: dbUser.about_me,
      email: dbUser.email,
      instagram_handle: dbUser.instagram_handle,
      username: dbUser.username,
      image_url: dbUser.image_url,
      project_url: dbUser.Projects.image_url,
      projects: dbUser.Projects
    });
  });
}
exports.signOutUser = function (req, res) {
  req.logout();
  res.redirect("/");
};
//signs out users

// login
exports.loginUser = function (req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json("/");
};

// register a user:   

// if statement --> users are checked against existing db
// the else creates an object with the user/name/pw and stores as a new user object

exports.signUpUser = function (req, res) {

  db.User.findAll({
    where: {
      username: req.body.username
    }
  }).then(function (users) {
    if (users.length > 0) {
      res.json({
        duplicateUser: true
      });
      //At some point, make sure that only one user can be associated with an email.
    } else {
      db.User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      }).then(function () {
        res.send({
          redirect: '/'
        });
      }).catch(function (err) {
        res.json(err);
      });
    }
  })
};
exports.user = function (req, res) {
  res.render('users/user');
}
//this is the users_controller.js file

exports.registrationPage = function (req, res) {
  res.render('users/registration', {
    layout: 'main-registration'
  });
};