'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Inadimplencias', {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      vencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      dt_quitacao: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      morador_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Moradores',
          key: 'id',
          as: 'morador_id',
        },
      }
  });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Inadimplencias');
  }
};
