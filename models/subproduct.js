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
    idProduct: DataTypes.INTEGER,
    watt: DataTypes.INTEGER,
    kelvin: DataTypes.INTEGER,
    lumen: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    productNumber: DataTypes.STRING



  }, {});
  Subproduct.associate = function(models) {
    // associations can be defined here
  };
  return Subproduct;
};