'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Chamados', {
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
            descricao: {
                type: Sequelize.STRING(300),
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
        return queryInterface.dropTable('Chamados');
    }
};