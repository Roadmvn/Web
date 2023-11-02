const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('db_tudy', 'tudy', 'tudy', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
