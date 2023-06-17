'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Advertencias', [
      {
        tipo: 'Critica',
        descricao: 'Andou de roupas de banho no elevador',
        multa: 250.00,
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 2
      },
      {
        tipo: 'Leve',
        descricao: 'Cachorro defecou na escada',
        multa: 50.00,
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 2
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Advertencias', null, {});
  }
};
