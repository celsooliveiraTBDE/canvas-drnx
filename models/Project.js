'use strict'; // strict mode 
var sequelize = require('sequelize');
// var User = require('./User.js')(sequelize, sequelize.DataTypes);

module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    project_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    project_goal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alcohol_content: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    ingredient_1: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_2: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_3: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_4: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_5: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_6: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_7: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    ingredient_8: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
    // The password cannot be null


    //   {
    //     classMethods: { // is this the key that links both tables?
    //       associate: function(models) {
    //         // associations can be defined here
    //         Project.belongsTo(models.User, {
    //             foreignKey: {
    //               allowNull: false
    //             }
    //         });
    //       }
    //     }
    //     }
    // );
  });
  Project.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Project.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Project;

}