'use strict';
module.exports = (sequelize, DataTypes) => {
  const Currency = sequelize.define('Currency', {
    idCurrency: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    value: DataTypes.FLOAT,
    default: DataTypes.BOOLEAN,
    symbol: DataTypes.STRING
  }, {});
  Currency.associate = function(models) {
    // associations can be defined here
  };
  return Currency;
};