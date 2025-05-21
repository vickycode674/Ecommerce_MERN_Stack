const bcrypt = require('bcryptjs');
const { json } = require('express');
const jwt = require('jsonwebtoken');
const userModel = require("../../models/userModel");



async function userSignInController(req, res) {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          error: true,
          message: "Please provide both email and password"
        });
      }
  
      const user = await userModel.findOne({ email });
  
      if (!user) {
        return res.status(404).json({
          success: false,
          error: true,
          message: "User not found"
        });
      }
  
      const checkPassword = await bcrypt.compare(password, user.password);
  
      if (!checkPassword) {
        return res.status(401).json({
          success: false,
          error: true,
          message: "Incorrect password"
        });
      }
  
      const tokenData = {
        _id: user._id,
        email: user.email
      };
  
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, {
        expiresIn: "8h"
      });
  
      const tokenOptions = {
        httpOnly: true,
        secure: false, // ⚠️ set to true in production (HTTPS)
      };
  
      res.cookie("token", token, tokenOptions).json({
        message: "Login successfully",
        data: token,
        success: true,
        error: false
      });
  
    } catch (err) {
      console.log("Sign-in error:", err);
      res.status(500).json({
        message: err.message || "Internal server error",
        error: true,
        success: false
      });
    }
  }
  

module.exports = userSignInController