'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comunicados', [
      {
        destino: 2,
        tipo: 'Individual',
        mensagem: 'O morador do 201 está pedindo que você estaciona o carro na sua vaga',
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 2
      },
      {
        tipo: 'Todos',
        mensagem: 'O concerto do portão lateral foi realizado com sucesso',
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 2
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comunicados', null, {});
  }
};
