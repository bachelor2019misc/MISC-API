'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomDot = sequelize.define('RoomDot', {
    xCoordinates: DataTypes.INTEGER,
    yCoordinates: DataTypes.INTEGER
  }, {});
  RoomDot.associate = function(models) {
    // associations can be defined here
  };
  return RoomDot;
};