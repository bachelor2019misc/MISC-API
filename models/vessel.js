'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vessel = sequelize.define('Vessel', {
    idVessel: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    vesselname: DataTypes.STRING,
    description: DataTypes.STRING,
    hidden: DataTypes.BOOLEAN
  }, {});
  Vessel.associate = function(models) {
    // associations can be defined here
  };
  return Vessel;
};