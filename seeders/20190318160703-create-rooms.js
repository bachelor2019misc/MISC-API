'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Rooms',
      [
        {
          title: "Room",
          image: "Room image",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: "Room2",
          image: "Room image2",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: "Room3",
          image: "Room image3",
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Rooms', null, {});
  }
};
