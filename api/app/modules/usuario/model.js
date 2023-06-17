"use strict";

module.exports = (sequelize, DataTypes) => {

  const Usuarios = sequelize.define("Usuarios", {
      email: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  }, {tableName: 'Usuarios'});

  Usuarios.associate = function(models) {
    Usuarios.belongsTo(models.Pessoas, {
        foreignKey: 'pessoa_id'
    });
  };
  return Usuarios;
};
