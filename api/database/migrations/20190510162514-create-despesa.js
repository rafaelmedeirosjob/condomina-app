'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Despesas', {
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
            favorecido: {
                type: Sequelize.STRING(300),
                allowNull: false,
            },
            nfe_link: {
              type: Sequelize.STRING(100),
              allowNull: true,
            },
            valor: {
              type: Sequelize.DECIMAL(10,2),
              allowNull: true,
            },
            pago: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
              },
            vencimento: {
              type: Sequelize.DATEONLY,
              allowNull: true,
            },
            dt_pagamento: {
                type: Sequelize.DATE,
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
        return queryInterface.dropTable('Despesas');
    }
};