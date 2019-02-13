'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageBlueprint = sequelize.define('ImageBlueprint', {
    idImageBlueprint: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    ImageBlueprintName: DataTypes.STRING,
    description: DataTypes.STRING,
    source: DataTypes.BLOB
  }, {});
  ImageBlueprint.associate = function(models) {
    ImageBlueprint.hasOne(models.Blueprint, {
      allowNull: false
    });
  };
  return ImageBlueprint;
};