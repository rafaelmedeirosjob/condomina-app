'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Reservas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            start: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            content: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            title: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            icon: {
              type: Sequelize.STRING,
              allowNull: true,
            },
            end: {
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
            area_id: {
              type: Sequelize.INTEGER,
              onDelete: 'CASCADE',
              references: {
                model: 'Areas',
                key: 'id',
                as: 'area_id',
              },
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
        return queryInterface.dropTable('Reservas');
    }
};