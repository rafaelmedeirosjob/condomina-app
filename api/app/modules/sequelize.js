import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import configJson from './../../config/config.json';

//Algoritmo para selecionar a devida configuração do JSON de configurações
const config = Object.entries(configJson).filter(
  ([key, value]) => key === 'development'
)[0][1];

const db = {};
const sequelize = new Sequelize(config);

fs.readdirSync(__dirname)
  .filter(directory => directory.slice(-3) !== '.js')
  .forEach(directory => {
    fs.readdirSync(path.join(__dirname, directory))
      .filter(file => file === 'model.js')
      .forEach(file => {
        const model = sequelize.import(path.join(__dirname, directory, file));
        db[model.name] = model;
      });
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
