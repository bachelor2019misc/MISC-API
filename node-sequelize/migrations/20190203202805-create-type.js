'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Types', {
      idType: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      WattTotal: {
        type: Sequelize.INTEGER
      },
      Kelvin: {
        type: Sequelize.INTEGER
      },
      Lumen: {
        type: Sequelize.INTEGER
      },
      Replace: {
        type: Sequelize.INTEGER
      },
      BasePrice: {
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
    return queryInterface.dropTable('Types');
  }
};