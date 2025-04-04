const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const User = require('../models/userModel');

dotenv.config();

//const router = express.Router();


const login = async (req, res) => {
    const { email, password } = req.body;

    try{
        const user = await User.findOne({where: {email}});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid password"});
        }

        const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'})
        res.json({token});
    } catch (err){
        res.status(500).json({message: 'Server error'});
    }
};

const logout = (req, res) => {
    res.json({message: 'Logged out successfully'});
};




module.exports = {login, logout}