'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoomRelationDot = sequelize.define('RoomRelationDot', {
    idRoomDot: DataTypes.INTEGER
  }, {});
  RoomRelationDot.associate = function(models) {
    // associations can be defined here
  };
  return RoomRelationDot;
};