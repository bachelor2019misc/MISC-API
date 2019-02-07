'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageProduct = sequelize.define('ImageProduct', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    source: DataTypes.BLOB
  }, {});
  ImageProduct.associate = function(models) {
    // associations can be defined here
  };
  return ImageProduct;
};