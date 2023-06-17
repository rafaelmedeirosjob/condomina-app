'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Temas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Temas');
    }
};