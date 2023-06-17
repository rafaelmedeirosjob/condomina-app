'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Usuarios', [
      {
        
        email: 'rafaelmedeirospb@hotmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 1
      },
      {
        email: 'celina@hotmail.com',
        password: '123456',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 2
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Usuarios', null, {});
  }
};
