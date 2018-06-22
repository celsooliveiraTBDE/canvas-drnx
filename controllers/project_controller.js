var db  = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db



exports.getProject = function(req, res) {

    // db.User.hasMany(db.Project, {foreignKey: 'user_id'});
    db.Project.belongsTo(db.User, {foreignKey: 'UserId'});

    // var projectRoute = req.params.project_name.replace('-', ' ');
    // projectRoute.replace(/\W+/g, '');
    // console.log('\n' + projectRoute + '\n');


    db.Project.findOne({
        where: {
            id: req.params.id
        },
        include: [db.User],
        // include: [db.Comment]
    }).then(results => {
        
        var projectPercent = parseInt(results.project_amount) / parseInt(results.project_goal) * 100;

        function float(x) {
            if (x % 1 !== 0) {
                projectPercent = Number.parseFloat(x).toFixed(1);
            }
        }
        float(projectPercent);
        // console.log(results.User.name);

       

        res.render('project', {
            projectName: results.project_name,
            ingredient_1: results.ingredient_1,
            ingredient_2: results.ingredient_2,
            ingredient_3: results.ingredient_3,
            ingredient_4: results.ingredient_4,
            description: results.description,
            username: results.User.name,
            imageUrl: results.image_url,
            projectAmount: results.project_amount,
            projectGoal: results.project_goal,
            projectPercent: projectPercent,
            userId: results.User.id,
            id: results.id
        });

    })
    
    
};

