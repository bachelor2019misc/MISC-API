'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Vessels', // name of Source model
      'idImageVessel', // name of the key to be added
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'ImageVessels', // name of Target model
          key: 'idImageVessel', // key in Target model that is referenced
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    )
    .then(() => {
      // Blueprint hasOne Vessel
      return queryInterface.addColumn(
        'Vessels', // name of Target model
        'idBlueprint', // name of the key to be added
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Blueprints', // name of Source model
            key: 'idBlueprint',
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Vessels', // name of Source model
      'idImageVessel' // key to remove
    )
    .then(() => {
      // remove Blueprint hasOne Vessel
      return queryInterface.removeColumn(
        'Vessels', // name of the Target model
        'idBlueprint' // key to remove
      );
    });
  }
};