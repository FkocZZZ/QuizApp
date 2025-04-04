const {Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL, {
    dialect: 'mysql',
    logging: false,
});

const testConnection = async ()=>{
    try{
        await sequelize.authenticate(); // Test the database connection
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}



module.exports = {sequelize, testConnection};