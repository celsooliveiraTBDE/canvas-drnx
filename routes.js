module.exports = function(app){
    
    var application = require('./routes/application.js');
    var users = require('./routes/users');
    var projects = require('./routes/projects');
    // var pricing = require('./routes/pricing');
    var project = require('./routes/project');

    app.use('/', application);
    app.use('/users', users);
    app.use('/projects', projects);
    // app.use('/pricing', pricing);
    app.use('/project', project);

}