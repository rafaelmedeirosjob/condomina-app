'use strict'

module.exports = (sequelize, DataTypes) => {
  const Assembleias = sequelize.define(
    'Assembleias',
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
      data_prevista: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      primeira_chamada: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      segunda_chamada: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { tableName: 'Assembleias'}
  );
  Assembleias.associate = function(models) {
    Assembleias.belongsTo(models.Condominios, {
        foreignKey: 'condominio_id'
    }),
    Assembleias.hasMany(models.Pautas, {
      foreignKey: 'assembleia_id'
    });
  }
  return Assembleias
}
