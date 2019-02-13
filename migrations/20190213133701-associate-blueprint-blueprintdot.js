'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Blueprint belongsToMany BlueprintDot
    return queryInterface.createTable(
      'BlueprintRelationDot',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        idBlueprint: {
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idBlueprintDot: {
          allowNull: false,
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('BlueprintRelationDot');
  },
};
