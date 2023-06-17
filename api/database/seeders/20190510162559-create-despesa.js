'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Despesas', [
      {
        tipo: 'Frequente',
        descricao: 'Despesas de agua',
        favorecido: 'Energysa',
        valor: 150.00,
        pago: false,
        vencimento: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        tipo: 'Inesperada',
        descricao: 'Manutenção da churrasqueira',
        favorecido: 'Churrasqueiras LTDA',
        valor: 450.00,
        pago: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        tipo: 'Inesperada',
        favorecido: 'Churrasqueiras LTDA',
        descricao: 'Manutenção da churrasqueira',
        valor: 450.00,
        pago: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 2
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Despesas', null, {});
  }
};
