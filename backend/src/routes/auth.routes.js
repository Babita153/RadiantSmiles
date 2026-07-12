const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

// Register user after Firebase Signup
router.post("/register", authController.registerUser);

// Login (verify Firebase token)
router.post("/login", authController.loginUser);

// Get logged in user profile
router.get("/profile", authController.getProfile);

module.exports = router;