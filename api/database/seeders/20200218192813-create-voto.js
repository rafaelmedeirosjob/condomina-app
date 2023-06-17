'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pautas', [
      {
        votos_aprovacao: 12,
        votos_deferidos: 0,
        votos_indeferidos: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
        assembleia_id: 1,
        tema_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pautas', null, {});
  }
};
