'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Assembleias', [
      {
        tipo: 'Extraordinária',
        status: 'Pendente',
        data_prevista:  new Date(),
        primeira_chamada:  '15:30',
        segunda_chamada:  '16:30',
        descricao: 'É preciso falar sobre a obra da piscina e do salao de jogos',
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        tipo: 'Ordinária',
        status: 'Concluida',
        data_prevista:  new Date(),
        primeira_chamada:  '15:30',
        segunda_chamada:  '16:30',
        descricao: 'É preciso falar sobre a obra da piscina e do salao de jogos',
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Assembleias', null, {});
  }
};
