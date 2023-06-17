'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define(
    'Pessoas',
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dt_nascimento: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {tableName: 'Pessoas'}
  );
  Pessoas.associate = function(models) {
    Pessoas.hasOne(models.Moradores, {
        foreignKey: 'pessoa_id'
    });
    Pessoas.hasMany(models.Chamados, {
      foreignKey: 'pessoa_id'
  });
    Pessoas.hasOne(models.Usuarios, {
          foreignKey: 'pessoa_id'
    });
    Pessoas.hasOne(models.Funcionarios, {
      foreignKey: 'pessoa_id'
    });
    Pessoas.belongsTo(models.Condominios, {
      foreignKey: 'condominio_id'
  });
  };
  
  return Pessoas;
};
