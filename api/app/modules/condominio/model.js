'use strict';

module.exports = (sequelize, DataTypes) => {
  const Condominios = sequelize.define(
    'Condominios',
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      caixa: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      mensalidade: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      token: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
    },
    { tableName: 'Condominios'}
  );
  Condominios.associate = function(models) {
    Condominios.hasOne(models.Endereços, {
      foreignKey: 'condominio_id'
    });
    Condominios.hasMany(models.Pessoas, {
        foreignKey: 'condominio_id'
    });
    Condominios.hasMany(models.Assembleias, {
      foreignKey: 'condominio_id'
    });
    Condominios.hasMany(models.Despesas, {
      foreignKey: 'condominio_id'
    });
    Condominios.hasMany(models.Areas, {
      foreignKey: 'condominio_id'
    });
  };
  
  return Condominios;
};
