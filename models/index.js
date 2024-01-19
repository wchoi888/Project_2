// models/index.js

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'mysql2',
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Your model definitions...

module.exports = db;