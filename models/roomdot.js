'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomDot = sequelize.define('RoomDot', {
    idRoomDot: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    xCoordinates: DataTypes.INTEGER,
    yCoordinates: DataTypes.INTEGER,
    idRoom: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER
  }, {});
  RoomDot.associate = function(models) {
    // associations can be defined here
  };
  return RoomDot;
};