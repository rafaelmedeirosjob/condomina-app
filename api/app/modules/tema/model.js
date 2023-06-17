'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temas = sequelize.define(
    'Temas',
    {
      descricao: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Temas'}
  );
  Temas.associate = function(models) {
    Temas.hasMany(models.Pautas, {
      foreignKey: 'tema_id'
    });
  };
  return Temas;
  
};
