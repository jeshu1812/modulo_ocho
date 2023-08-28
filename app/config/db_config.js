const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mibaseocho', 'postgres', 'mariajesus', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
