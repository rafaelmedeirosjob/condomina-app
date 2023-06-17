'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Documentos', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nome: {
            type: Sequelize.STRING(200),
            allowNull: false,
        },
        tamanho: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
        key: {
          type: Sequelize.STRING(300),
          allowNull: false,
      },
        url: {
          type:  Sequelize.STRING(300),
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
        }
    });
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Documentos');
  }
};
