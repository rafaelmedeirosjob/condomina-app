'use strict';

module.exports = (sequelize, DataTypes) => {
  const Chamados = sequelize.define(
    'Chamados',
    {
      tipo: {
        type: DataTypes.STRING,
        allowNull: true
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Chamados'}
  );
  Chamados.associate = function(models) {
    Chamados.belongsTo(models.Pessoas, {
        foreignKey: 'pessoa_id'
    });
  };
  return Chamados;
};
