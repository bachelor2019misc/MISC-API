'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blueprint = sequelize.define('Blueprint', {
    idBlueprint: DataTypes.INTEGER
  }, {});
  Blueprint.associate = function(models) {
    // associations can be defined here
  };
  return Blueprint;
};