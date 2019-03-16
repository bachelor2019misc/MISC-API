'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blueprint = sequelize.define('Blueprint', {
    idBlueprint: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    imageBlueprint: DataTypes.TEXT
  }, {});
  Blueprint.associate = function(models) {
    /*Blueprint.hasOne(models.Vessel);
    Blueprint.belongsTo(models.ImageBlueprint);
    Blueprint.belongsToMany(models.BlueprintDot, {
      through: 'BlueprintRelationDot'
    }); */
  };
  return Blueprint;
};