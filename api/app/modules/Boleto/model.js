'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boletos = sequelize.define(
    'Boletos',
    {
      code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      paymentLink: {
        type: DataTypes.STRING,
        allowNull: false
      },
      barcode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dueDate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: 'Boletos'}
  );
  Boletos.associate = function(models) {
    Boletos.belongsTo(models.Moradores, {
        foreignKey: 'morador_id'
    });
  };
  return Boletos;
};
