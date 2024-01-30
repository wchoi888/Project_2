// Imports:
const seedUsers = require("./user-seeds");
const seedBooks = require("./book-seeds");
const sequelize = require("../config/connection");
//Seeding Function:
const seedAll = async () => {
  //Synchronization:
  await sequelize.sync({ force: true });
  //Seeding Data:
  await seedUsers();

  await seedBooks();

  process.exit(0);
};
//Execution:
seedAll();
