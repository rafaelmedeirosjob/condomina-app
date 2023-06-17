'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reservas', [
      {
        start: '2019-06-15 14:00',
        end: '2019-06-15 18:00',
        title: 'Churrasco na lage',
        icon: 'trophy', // Custom attribute.
        content: 'Vou chamar alguns amigos e fazer um churrasco na area da piscina',
        createdAt: new Date(),
        updatedAt: new Date(),
        area_id: 1,
        morador_id: 1
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reservas', null, {});
  }
};
