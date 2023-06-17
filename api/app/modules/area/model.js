'use strict';

module.exports = (sequelize, DataTypes) => {
  const Areas = sequelize.define(
    'Areas',
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      valor: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      tempo_limite: {
        type: DataTypes.STRING,
        allowNull: false
      },
      horario_limite: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Areas'}
  );
  Areas.associate = function(models) {
    Areas.belongsTo(models.Condominios, {
        foreignKey: 'condominio_id'
    });
  };
  return Areas;
};
