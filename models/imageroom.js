'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageRoom = sequelize.define('ImageRoom', {
    ImageRoomName: DataTypes.STRING,
    description: DataTypes.STRING,
    source: DataTypes.BLOB
  }, {});
  ImageRoom.associate = function(models) {
    // associations can be defined here
  };
  return ImageRoom;
};