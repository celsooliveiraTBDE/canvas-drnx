const express = require('express');
const router  = express.Router();

const users_controller = require('../controllers/users_controller');

router.get('/', users_controller.index); // localhost:3000/users

// router.get ('/user_projects', users_controller.getUserProject);
// var passport = require("../config/passport");
// var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/signup', users_controller.registrationPage);

router.get('/sign-out', users_controller.signOutUser);

router.get('/user/:id', users_controller.getUser);

router.post('/signup', users_controller.signUpUser);

module.exports = router;