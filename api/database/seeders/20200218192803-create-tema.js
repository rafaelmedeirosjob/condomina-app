'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Temas', [
      {
        descricao: 'Aprovação de contas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Aumento da taxa',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Eleição de síndico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Obras necessárias',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Obras úteis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Obras voluptuárias',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Alterações na Convenção de condomínios',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Destituição do síndico',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Outros motivos',
        createdAt: new Date(),
        updatedAt: new Date()
      },], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Temas', null, {});
  }
};
