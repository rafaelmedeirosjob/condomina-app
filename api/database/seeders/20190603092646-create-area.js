'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Areas', [
      {
        nome:  'Salao de festas',
        class: 'festa',
        status: 'disponivel',
        valor: '250.00',
        tempo_limite:  '05:30',
        horario_limite: '23:00',
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        nome:  'Salao de jogos',
        class: 'esporte',
        status: 'disponivel',
        valor: '250.00',
        tempo_limite:  '05:30',
        horario_limite: '23:00',
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Areas', null, {});
  }
};
