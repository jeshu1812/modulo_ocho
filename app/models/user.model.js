const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');
const BootcampUser = require('../models/bootcamp_user.model.js'); // Importa el modelo BootcampUser
const Bootcamp = require('../models/bootcamp.model.js');

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});



module.exports = User;
