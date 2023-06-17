'use strict';

module.exports = (sequelize, DataTypes) => {
  const Obras = sequelize.define(
    'Obras',
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      motivo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_prevista: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      realizada: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      progresso: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_limite: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    },
    { tableName: 'Obras'}
  );
  Obras.associate = function(models) {
    Obras.belongsTo(models.Despesas, {
      foreignKey: 'despesa_id'
    });
  };
  return Obras;
};
