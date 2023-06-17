'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pautas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      votos_aprovacao: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      votos_deferidos: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      votos_indeferidos: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      assembleia_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Assembleias',
          key: 'id',
          as: 'assembleia_id',
        }
      },
      tema_id: {
          type: Sequelize.INTEGER,
          onDelete: 'CASCADE',
          references: {
            model: 'Temas',
            key: 'id',
            as: 'tema_id',
          }
        }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pautas');
  }
};
