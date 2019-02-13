'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlueprintDot = sequelize.define('BlueprintDot', {
    idBlueprintDot: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    xCoordinates: DataTypes.INTEGER,
    yCoordinates: DataTypes.INTEGER
  }, {});
  BlueprintDot.associate = function(models) {
    BlueprintDot.belongsTo(models.Room);
    BlueprintDot.belongsToMany(models.Blueprint, {
      through: 'BlueprintRelationDot'
    });
  };
  return BlueprintDot;
};