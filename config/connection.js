//Loading Environment Variables:
require("dotenv-safe").config({
  example: ".env",
});
// Importing Sequelize:
const Sequelize = require("sequelize");
//Creating a Sequelize Instance:
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: "3306",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

module.exports = sequelize;
