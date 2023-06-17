'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Condominos', [
      {
        cpf: '10910176469',
        createdAt: new Date(),
        updatedAt: new Date(),
        morador_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Condominos', null, {});
  }
};
