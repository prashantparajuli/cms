'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class DepartmentMember extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Department, User }) {
            // define association here
            this.belongsTo(Department, { foreignKey: 'deptId', as: 'department' })
            this.belongsTo(User, { foreignKey: 'userId', as: 'user' })
        }
    }
    DepartmentMember.init({
        deptId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Department',
                key: 'id'
            }
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'DepartmentMember',
    });
    return DepartmentMember;
};