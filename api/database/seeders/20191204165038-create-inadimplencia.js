'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Inadimplencias', [
      {
        valor: 52.0,
        ativo: true,
        vencimento: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        morador_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Inadimplencias', null, {});
  }
};
