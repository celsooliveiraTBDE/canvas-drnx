module.exports = function(app){
    
//mapping routes to direct to the specific route to go to
    var application = require('./routes/application');
    var users = require('./routes/users');
    var projects = require('./routes/projects');
    var pricing = require('./routes/pricing');

    app.use('/', application);
    app.use('/users', users);
    app.use('/projects', projects);
    app.use('/pricing', pricing);
//other routes..
}// app.use 