'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subproduct = sequelize.define('Subproduct', {
    idSubproduct: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.TEXT,
    idProduct: DataTypes.INTEGER
  }, {});
  Subproduct.associate = function(models) {
    // associations can be defined here
  };
  return Subproduct;
};