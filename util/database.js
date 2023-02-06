const Sequelize = require("sequelize");
const sequelize = new Sequelize("nodecode", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;