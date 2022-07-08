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
        static associate(models) {
            // define association here
            this.belongsTo('Departments', { foreignKey: 'deptId', as: 'department' });
            this.hasMany('Users', { foreignKey: 'deptId', as: 'user' });
        }
    }
    DepartmentMember.init({
        deptId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'DepartmentMember',
    });
    return DepartmentMember;
};