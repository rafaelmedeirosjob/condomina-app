'use strict'

module.exports = (sequelize, DataTypes) => {
  const Inadimplencias = sequelize.define(
    'Inadimplencias',
    {
      ativo: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      vencimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      dt_quitacao: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      valor: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    },
    { tableName: 'Inadimplencias'}
  )
  Inadimplencias.associate = function(models) {
    Inadimplencias.belongsTo(models.Moradores, {
        foreignKey: 'morador_id'
    })
  }
  return Inadimplencias
}
