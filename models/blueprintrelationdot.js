'use strict';
module.exports = (sequelize, DataTypes) => {
  const BlueprintRelationDot = sequelize.define('BlueprintRelationDot', {
    idBlueprintDot: DataTypes.INTEGER
  }, {});
  BlueprintRelationDot.associate = function(models) {
    // associations can be defined here
  };
  return BlueprintRelationDot;
};