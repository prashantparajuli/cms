'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Project, User }) {
      // define association here
      this.belongsTo(Project, { foreignKey: 'id', as: 'project' })
      this.belongsTo(User, { foreignKey: 'id', as: 'user' })
  }
  }
  ProjectMember.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'User',
          key: 'id'
      }
  },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'Project',
          key: 'id'
      }
  }
  }, {
    sequelize,
    modelName: 'ProjectMember',
  });
  return ProjectMember;
};