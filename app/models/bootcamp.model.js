const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');
const BootcampUser = require('../models/bootcamp_user.model.js'); // Importa el modelo BootcampUser
const User = require('../models/user.model.js')

const Bootcamp = sequelize.define('Bootcamp', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 5,
      max: 20,
      isInt: true,
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



module.exports = Bootcamp;
