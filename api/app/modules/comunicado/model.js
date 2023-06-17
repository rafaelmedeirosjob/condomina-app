'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comunicados = sequelize.define(
    'Comunicados',
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      destino: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      mensagem: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Comunicados'}
  );
  Comunicados.associate = function(models) {
    Comunicados.belongsTo(models.Condominios, {
        foreignKey: 'condominio_id'
    });
  };
  return Comunicados;
};
