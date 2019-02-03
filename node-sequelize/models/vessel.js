'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vessel = sequelize.define('Vessel', {
    vesselname: DataTypes.STRING,
    description: DataTypes.STRING,
    hidden: DataTypes.BOOLEAN
  }, {});
  Vessel.associate = function(models) {
    // associations can be defined here
  };
  return Vessel;
};