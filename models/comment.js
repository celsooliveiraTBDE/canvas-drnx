'use strict';

module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define('Comment', {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0
        },
    }, {
            classMethods: { // is this the key that links both tables?
                associate: function (models) {
                    // associations can be defined here
                    Comment.belongsTo(models.User, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Comment.belongsTo(models.Project, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        });
    return Comment;
};