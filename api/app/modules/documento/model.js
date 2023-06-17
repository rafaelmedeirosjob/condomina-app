'use strict';
module.exports = (sequelize, DataTypes) => {
  const Documentos = sequelize.define(
    'Documentos',
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: true
      },
      tamanho: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      key: {
        type: DataTypes.STRING,
        allowNull: true
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Documentos'}
  );
  Documentos.associate = function(models) {
    Documentos.belongsTo(models.Condominios, {
        foreignKey: 'condominio_id'
    });
  };
  return Documentos;
};
