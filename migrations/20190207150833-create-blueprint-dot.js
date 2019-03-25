'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BlueprintDots', {
      idBlueprintDot: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      xCoordinates: {
        type: Sequelize.INTEGER
      },
      yCoordinates: {
        type: Sequelize.INTEGER
      },
      idVessel: {
        type: Sequelize.INTEGER
      },
      idRoom: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('BlueprintDots');
  }
};