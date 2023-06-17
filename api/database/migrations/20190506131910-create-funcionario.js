'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      salario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
      },
      cargo: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      vinculo: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      pessoa_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Pessoas',
          key: 'id',
          as: 'pessoa_id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Funcionarios');
  }
};
