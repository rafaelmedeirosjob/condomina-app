'use strict';

module.exports = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define(
    'Funcionarios',
    {
      salario: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      cargo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      vinculo: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {  tableName: 'Funcionarios'}
  );
  Funcionarios.associate = function(models) {
    Funcionarios.belongsTo(models.Pessoas, {
        foreignKey: 'pessoa_id'
    });
  };
  return Funcionarios;
};
