'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlueprintDot = sequelize.define('BlueprintDot', {
    xCoordinates: DataTypes.INTEGER,
    yCoordinates: DataTypes.INTEGER
  }, {});
  BlueprintDot.associate = function(models) {
    // associations can be defined here
  };
  return BlueprintDot;
};