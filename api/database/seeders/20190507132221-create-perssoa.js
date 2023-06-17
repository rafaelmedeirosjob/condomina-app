'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Rafael Medeiros',
        telefone: '998256862',
        dt_nascimento: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        nome: 'Celina Medeiros',
        telefone: '992222262',
        dt_nascimento: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        nome: 'Daniel oliveira',
        telefone: '992929292',
        dt_nascimento: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 2
      }, 
      {
        nome: 'Roberval Santos',
        telefone: '998256862',
        dt_nascimento: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Pessoas', null, {});
  }
};
