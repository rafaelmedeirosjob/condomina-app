'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Areas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nome: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            class: {
              type: Sequelize.STRING(100),
              allowNull: false,
          },
            status: {
              type: Sequelize.STRING(100),
              allowNull: false,
          },
            valor: {
              type: Sequelize.DECIMAL(10,3),
              allowNull: true,
            },
            tempo_limite: {
              type: Sequelize.STRING(50),
              allowNull: false,
            },
            horario_limite: {
              type: Sequelize.STRING(50),
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
        return queryInterface.dropTable('Areas');
    }
};