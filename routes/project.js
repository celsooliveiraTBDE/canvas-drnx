var express = require('express');
var router  = express.Router();

var project_controller = require('../controllers/project_controller');
// var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/:id', project_controller.getProject);


module.exports = router;