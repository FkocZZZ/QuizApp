const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/dbConnection').sequelize;// Import the sequelize instance from dbConnection

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin, user'),
        allowNull: false,
        defaultValue: 'user',
    },
})

module.exports = User;