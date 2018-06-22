var db  = require('../models'); //uses Sequelize CLI - wraps all functions inside of models under db and therefore you can use that. So you can call functions with .db



exports.getProject = function(req, res) {

    db.Project.belongsTo(db.User, {foreignKey: 'UserId'});
    db.Comment.belongsTo(db.Project, {foreignKey: 'ProjectId'})

    // var projectRoute = req.params.project_name.replace('-', ' ');
    // projectRoute.replace(/\W+/g, '');
    // console.log('\n' + projectRoute + '\n');

    // db.Project.findOne({
    //     where: {
    //         id: req.params.id
    //     },
    //     include: [db.User]
    //     // include: [db.Comment]
    // }).then(results => {
        
    //     var projectPercent = parseInt(results.project_amount) / parseInt(results.project_goal) * 100;

    //     function float(x) {
    //         if (x % 1 !== 0) {
    //             projectPercent = Number.parseFloat(x).toFixed(1);
    //         }
    //     }
    //     float(projectPercent);
    //     res.render('project', {
    //         projectName: results.project_name,
    //         ingredient_1: results.ingredient_1,
    //         ingredient_2: results.ingredient_2,
    //         ingredient_3: results.ingredient_3,
    //         ingredient_4: results.ingredient_4,
    //         description: results.description,
    //         username: results.User.name,
    //         imageUrl: results.image_url,
    //         projectAmount: results.project_amount,
    //         projectGoal: results.project_goal,
    //         projectPercent: projectPercent,
    //         userId: results.User.id,
    //         id: results.id
    //     });

    // })
    
    Promise.all([
        db.Comment.findAll({
            where: {
                ProjectId: req.params.id
            }
        }),
        db.Project.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        })
    ])
    .then(data => {

        var projectPercent = parseInt(data.project_amount) / parseInt(data.project_goal) * 100;

            function float(x) {
                if (x % 1 !== 0) {
                    projectPercent = Number.parseFloat(x).toFixed(1);
                }
            }
            float(projectPercent);

            // var commentArray = [];

            // data[0].forEach(i => {
            //     eachComment = i.comment;
            //     commentArray.push(eachComment);
            // })       
            // console.log(commentArray);

            // var commentDisplay = {
            //     comment: data[0][0].comment
            // };
        res.render('project', {
            projectName: data[1].project_name,
            ingredient_1: data[1].ingredient_1,
            ingredient_2: data[1].ingredient_2,
            ingredient_3: data[1].ingredient_3,
            ingredient_4: data[1].ingredient_4,
            description: data[1].description,
            username: data[1].User.name,
            imageUrl: data[1].image_url,
            projectAmount: data[1].project_amount,
            projectGoal: data[1].project_goal,
            projectPercent: projectPercent,
            userId: data[1].User.id,
            id: data[1].id,
            comment: data[0][0].comment
        });
    }).catch(err => {
        console.log(err);
    })
    
};

exports.createComment = function(req, res) {
    db.Comment.create(req.body, {
        where: {
            id: req.body.id
        }
    }).then(data => {
        res.json(data);
    })
}
