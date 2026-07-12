const User = require("../models/user.model");

// Register User
exports.registerUser = async (req, res) => {
    try {
        const { firebaseUID, name, email, phone, photo } = req.body;
        let user = await User.findOne({ firebaseUID });
        if (user) {
            return res.status(200).json({
                success: true,
                message: "User already exists",
                user,
            });
        }
        user = await User.create({
            firebaseUID,
            name,
            email,
            phone,
            photo,
        });
        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Login User (Firebase already authenticated)
exports.loginUser = async (req, res) => {
    try {
        const { firebaseUID } = req.body;
        const user = await User.findOne({ firebaseUID });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// User Profile
exports.getProfile = async (req, res) => {
    try {
        const { firebaseUID } = req.query;
        const user = await User.findOne({ firebaseUID });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};