'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Chamados', [
      {
        tipo: 'Reclamação',
        descricao: 'Morador do 201 está fazendo muito barulho',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 2
      },
      {
        tipo: 'Sugestão',
        descricao: 'Ter uma cinuca para os adolecentes',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 1
      },
      {
        tipo: 'Mensagem direta ao sindico',
        descricao: 'Não gosto de fulano, ela deixa as  roupas estendidas muito tempo',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 3
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chamados', null, {});
  }
};
