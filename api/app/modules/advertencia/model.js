'use strict';

module.exports = (sequelize, DataTypes) => {
  const Advertencias = sequelize.define(
    'Advertencias',
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      multa: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Advertencias'}
  );
  Advertencias.associate = function(models) {
    Advertencias.belongsTo(models.Pessoas, {
        foreignKey: 'pessoa_id'
    });
  };
  return Advertencias;
};
