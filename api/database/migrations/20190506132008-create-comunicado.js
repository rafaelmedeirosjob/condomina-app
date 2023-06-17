'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comunicados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      destino: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      mensagem: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
      tipo: {
        type: Sequelize.STRING(20),
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
      condominio_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Condominios',
          key: 'id',
          as: 'condominio_id',
        },
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Comunicados');
  }
};
