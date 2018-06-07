var db  = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db

exports.index = function(req, res) {
//   db.Project.findAll({
//     where: {
//       UserId: req.user.id
//     }
//   })
//   .then(function(dbProject) {
    console.log(dbProject);
//     res.render('projects/projects', {
//       layout: 'main-projects',
//       project: dbProject
//     });
//   });
};

exports.createProject = function(req, res) {

  console.log(req.user);
  // Add id from User onto req.body
//   req.body.UserId = req.user.id;

//   db.Project.create(req.body).then(function(dbPost) {
//     res.json(dbPost);
//   });
};
