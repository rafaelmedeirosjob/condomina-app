'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pautas = sequelize.define(
    'Pautas',
    {
      votos_aprovacao: 
      {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      votos_deferidos: 
      {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      votos_indeferidos: 
      {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { tableName: 'Pautas'}
  );
  Pautas.associate = function(models) {
    Pautas.belongsTo(models.Assembleias, {
        foreignKey: 'assembleia_id'
    }),
    Pautas.belongsTo(models.Temas, {
      foreignKey: 'tema_id'
    });
  }
  return Pautas;
};
