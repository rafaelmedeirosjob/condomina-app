'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Boletos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      paymentLink: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      barcode: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      dueDate: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      amount: {
        type: Sequelize.STRING(100),
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
    return queryInterface.dropTable('Boletos');
  }
};
