'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Moradores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bloco: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
      residencia: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      sindico: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      pagante: {
        type: Sequelize.BOOLEAN,
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
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Moradores');
  }
};
