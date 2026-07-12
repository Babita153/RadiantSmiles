const Review = require("../models/review.model");
const User = require("../models/user.model");

// Get All Reviews
exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find().populate("user", "name photo");
        res.status(200).json({
            success: true,
            reviews
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Add Review
exports.createReview = async (req, res) => {
    try {
        const { firebaseUID, rating, comment } = req.body;
        const user = await User.findOne({ firebaseUID });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const review = await Review.create({
            user: user._id,
            rating,
            comment
        });

        res.status(201).json({
            success: true,
            review
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Delete Review
exports.deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Review Deleted"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};