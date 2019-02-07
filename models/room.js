'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    idRoom: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    roomName: DataTypes.STRING
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};