const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const register = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const role = 'user';
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
        const user = await User.create({ email, username, password: hashedPassword, role:role });
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {register};
