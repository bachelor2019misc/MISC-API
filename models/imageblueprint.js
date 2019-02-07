'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageBlueprint = sequelize.define('ImageBlueprint', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    source: DataTypes.BLOB
  }, {});
  ImageBlueprint.associate = function(models) {
    // associations can be defined here
  };
  return ImageBlueprint;
};