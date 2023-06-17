'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reservas = sequelize.define(
    'Reservas',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true
      },
      start: {
        type: DataTypes.STRING,
        allowNull: false
      },
      end: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    { tableName: 'Reservas'}
  );
  Reservas.associate = function(models) {
    Reservas.belongsTo(models.Areas, {
        foreignKey: 'area_id'
    });
    Reservas.belongsTo(models.Moradores, {
      foreignKey: 'morador_id'
  });
  };
  return Reservas;
};
