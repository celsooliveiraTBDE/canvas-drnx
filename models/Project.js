'use strict';

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredient_1: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ingredient_2: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    ingredient_3: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // The password cannot be null
    arrivalDate: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    classMethods: { // is this the key that links both tables?
      associate: function(models) {
        // associations can be defined here
        Project.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
        });
      }
    }
  });
  return Project;
};