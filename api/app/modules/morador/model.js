'use strict';

module.exports = (sequelize, DataTypes) => {
  const Moradores = sequelize.define(
    'Moradores',
    {
      bloco: {
        type: DataTypes.STRING,
        allowNull: true
      },
      residencia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sindico: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      pagante: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    { tableName: 'Moradores'}
  );
  Moradores.associate = function(models) {
    Moradores.belongsTo(models.Pessoas, {
        foreignKey: 'pessoa_id'
    });
    Moradores.hasOne(models.Condominos, {
      foreignKey: 'morador_id'
  });
  };
  return Moradores;
};
