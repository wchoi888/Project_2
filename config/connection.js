const Sequelize = require('sequelize');

const Sequelize = new Sequelize('virtual_bookshelf', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
});

module.exports = sequelize;
