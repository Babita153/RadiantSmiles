const express = require("express");
const router = express.Router();

const reviewController = require("../controllers/review.controller");

// Get Reviews
router.get("/", reviewController.getAllReviews);

// Add Review
router.post("/", reviewController.createReview);

// Delete Review
router.delete("/:id", reviewController.deleteReview);

module.exports = router;