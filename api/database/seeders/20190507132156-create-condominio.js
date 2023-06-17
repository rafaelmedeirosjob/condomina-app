'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Condominios', [
      {
        nome: 'Willyvania',
        caixa: 7200,
        mensalidade: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Greenville',
        caixa: 9200,
        mensalidade: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Condominios', null, {});
  }
};
