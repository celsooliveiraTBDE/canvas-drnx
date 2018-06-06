'use strict';

module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    projectName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    drinkName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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