const { DataTypes } = require('sequelize');
const sequelize = require('../config/db_config.js');

const BootcampUser = sequelize.define('BootcampUser', {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',  // This should match the table name of Users
          key: 'id',       // This should match the column name in Users table
        },
      },
        BootcampId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: 'Bootcamp',  // This should match the table name of Bootcamps
          key: 'id',        // This should match the column name in Bootcamps table
        },
      },
    });

module.exports = BootcampUser;
