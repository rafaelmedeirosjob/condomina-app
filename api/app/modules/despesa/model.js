'use strict';

module.exports = (sequelize, DataTypes) => {
  const Despesas = sequelize.define(
    'Despesas',
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false
      },
      favorecido: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pago: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      nfe_link: {
        type: DataTypes.STRING,
        allowNull: true
      },
      valor: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      vencimento: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      dt_pagamento: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    { tableName: 'Despesas'}
  );
  Despesas.associate = function(models) {
    Despesas.belongsTo(models.Condominios, {
      foreignKey: 'condominio_id'
    });
    Despesas.hasOne(models.Obras, {
      foreignKey: 'despesa_id'
  });
  };
  return Despesas;
};
