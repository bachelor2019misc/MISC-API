'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageVessel = sequelize.define('ImageVessel', {
    idImageVessel: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    imagevesselname: DataTypes.STRING,
    description: DataTypes.STRING,
    source: DataTypes.BLOB
  }, {});
  ImageVessel.associate = function(models) {
    // associations can be defined here
  };
  return ImageVessel;
};