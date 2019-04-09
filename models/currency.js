'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    idCurrency: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    value: DataTypes.FLOAT
  }, {});
  Currency.associate = function(models) {
    // associations can be defined here
  };
  return Currency;
};