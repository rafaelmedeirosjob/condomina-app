'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Assembleias', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            tipo: {
              type: Sequelize.STRING(50),
              allowNull: false,
            },
            descricao: {
              type: Sequelize.STRING(300),
              allowNull: true,
            },
            status: {
              type: Sequelize.STRING(40),
              allowNull: false,
            },
            data_prevista: {
              type: Sequelize.DATEONLY,
              allowNull: false,
            },
            primeira_chamada: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            segunda_chamada: {
              type: Sequelize.STRING,
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
              }
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Assembleias');
    }
};