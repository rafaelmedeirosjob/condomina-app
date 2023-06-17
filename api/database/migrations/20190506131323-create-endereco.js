'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Endereços', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cep: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      rua: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      numero: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      bairro: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      estado_sigla: {
        type: Sequelize.STRING(15),
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
    return queryInterface.dropTable('Endereços');
  }
};
