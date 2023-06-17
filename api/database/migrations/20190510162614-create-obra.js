'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Obras', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tipo: {
              type: Sequelize.STRING(30),
              allowNull: false,
            },
            motivo: {
              type: Sequelize.STRING(300),
              allowNull: false,
            },
            data_prevista: {
              type: Sequelize.DATEONLY,
              allowNull: false,
            },
            realizada: {
              type: Sequelize.BOOLEAN,
              allowNull: false,
            },
            progresso: {
              type: Sequelize.STRING(30),
              allowNull: false,
            },
            data_limite: {
              type: Sequelize.DATEONLY,
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
            despesa_id: {
              type: Sequelize.INTEGER,
              onDelete: 'CASCADE',
              references: {
                model: 'Despesas',
                key: 'id',
                as: 'despesa_id',
              },
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Obras');
    }
};