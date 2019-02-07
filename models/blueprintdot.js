'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlueprintDot = sequelize.define('BlueprintDot', {
    BlueprintdotId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    xCoordinates: DataTypes.INTEGER,
    yCoordinates: DataTypes.INTEGER
  }, {});
  BlueprintDot.associate = function(models) {
    // associations can be defined here
  };
  return BlueprintDot;
};