'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Obras', [
      {
        data_prevista:  new Date(),
        progresso: '50.0',
        tipo: 'Útil',
        motivo: 'Churrasqueira estava sem acender',
        realizada: false,
        data_limite: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        despesa_id: 2
      },
      {
        data_prevista:  new Date(),
        progresso: '17.2',
        tipo: 'Necessária',
        motivo: 'Churrasqueira estava sem acender',
        realizada: false,
        data_limite: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        despesa_id: 3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Obras', null, {});
  }
};
