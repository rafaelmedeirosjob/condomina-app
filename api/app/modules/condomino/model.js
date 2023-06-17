'use strict';

module.exports = (sequelize, DataTypes) => {
  const Condominos = sequelize.define(
    'Condominos',
    {
      cpf: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Condominos'}
  );
  Condominos.associate = function(models) {
    Condominos.belongsTo(models.Moradores, {
        foreignKey: 'morador_id'
    });
  };
  return Condominos;
};
