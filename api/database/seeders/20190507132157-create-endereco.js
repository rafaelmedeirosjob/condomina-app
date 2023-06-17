'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Endereços', [
      {
        cep: "58030219",
        rua: "Abdon chianca",
        numero: "65",
        bairro: "Estados",
        cidade: "João Pessoas",
        estado: "Paraiba",
        estado_sigla: "PB",
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 1
      },
      {
        cep: "01046010",
        rua: "Av. Ipiranga",
        numero: "100",
        bairro: "Republica",
        cidade: "Sao Paulo",
        estado: "Sao paulo",
        estado_sigla: "SP",
        createdAt: new Date(),
        updatedAt: new Date(),
        condominio_id: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Endereços', null, {});
  }
};
