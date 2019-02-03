'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    WattTotal: DataTypes.INTEGER,
    Kelvin: DataTypes.INTEGER,
    Lumen: DataTypes.INTEGER,
    Replace: DataTypes.INTEGER,
    BasePrice: DataTypes.INTEGER
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
  };
  return Type;
};