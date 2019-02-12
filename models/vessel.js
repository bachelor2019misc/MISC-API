'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vessel = sequelize.define('Vessel', {
    idVessel: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    vesselName: DataTypes.STRING,
    description: DataTypes.STRING,
    hidden: DataTypes.BOOLEAN
  }, {});
  Vessel.associate = function(models) {
    Vessel.belongsTo(models.ImageVessel, {
      allowNull: false
    });
    Vessel.belongsTo(models.Blueprint, {
      allowNull: false
    });
  };
  return Vessel;
};