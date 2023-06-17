'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Funcionarios', [
      {
        salario: 800.00,
        cargo: 'Faxineiro',
        vinculo: 'CLT',
        createdAt: new Date(),
        updatedAt: new Date(),
        pessoa_id: 4
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Funcionarios', null, {});
  }
};
