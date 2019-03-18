'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Vessels',
      [
        {
          title: 'Vessel1',
          description: 'Vessel1 description',
          hidden: false,
          image: "imagevessel1",
          blueprintid: 1,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'Vessel2',
          description: 'Vessel2 description',
          hidden: false,
          image: "imagevessel1",
          blueprintid: 2,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        },
        {
          title: 'Vessel3',
          description: 'Vessel3 description',
          hidden: false,
          image: "imagevessel3",
          blueprintid: 3,
          createdAt: Sequelize.literal('NOW()'),
          updatedAt: Sequelize.literal('NOW()')
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Vessels', null, {});
  }
};
