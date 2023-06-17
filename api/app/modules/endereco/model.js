'use strict';

module.exports = (sequelize, DataTypes) => {
  const Endereços = sequelize.define(
    'Endereços',
    {
        cep: {
        type: DataTypes.STRING,
        allowNull: false
      },
      rua: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numero: {
        type: DataTypes.STRING,
        allowNull: false
      },
      bairro: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cidade: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false
      },
      estado_sigla: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Endereços'}
  );
  Endereços.associate = function(models) {
    Endereços.belongsTo(models.Condominios, {
        foreignKey: 'condominio_id'
    });
  };
  return Endereços;
};
