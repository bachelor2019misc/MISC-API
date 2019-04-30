'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    idRoom: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.TEXT,
    hidden: DataTypes.BOOLEAN
  }, {});
  Room.associate = function(models) {
    // associations can be defined here
  };
  return Room;
};