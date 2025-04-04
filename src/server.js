const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoute');
const registerRoutes = require('./routes/registerRoute');
const User = require('./models/userModel');
const {testConnection} = require('./config/dbConnection');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/register', registerRoutes);

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);

    await testConnection();

    //Synchronize models with the database
    try {
        await User.sync(); // Sync the User model with the database
        console.log('Database synced');
    } catch (err) {
        console.error('Unable to sync database:', err);
    }
});