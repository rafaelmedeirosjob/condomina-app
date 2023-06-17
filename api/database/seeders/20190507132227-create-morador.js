'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Moradores', [
      {
        bloco: 'B',
        residencia: '301',
        sindico: 'true',
        pagante: 'false',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 1
      },
      {
        bloco: 'D',
        residencia: '202',
        sindico: 'false',
        pagante: 'true',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 2
      },
      {
        residencia: '54',
        sindico: 'false',
        pagante: 'true',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Moradores', null, {});
  }
};
