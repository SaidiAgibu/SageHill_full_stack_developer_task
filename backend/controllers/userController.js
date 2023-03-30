const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const { User } = require("../models");
const router = express.Router();

 //function to find a person by email and passwird
 User.findByEmailAndPassword = async (email, password) => {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error('User not found');
  
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) throw new Error('Invalid password');
  
    return user;
  };
  

//registering a new user
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
   
    
      const user = await User.create({ name, email, password: hash });
    

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByEmailAndPassword(email, password);
    if (!user) {
      res.json({
        success: false,
        message: "invalid user",
      });
    } else {
      const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
      res.json({ user,token });
    }
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

//logout
const logout = (req, res) => {
    res.clearCookie('token'); // clear the JWT cookie
    res.json({ message: 'User successfully logged out' });
  };

module.exports = { register, login, logout };
