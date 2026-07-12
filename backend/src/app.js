const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require("./routes/auth.routes");
const appointmentRoutes = require("./routes/appointment.routes");
const serviceRoutes = require("./routes/service.routes");
const reviewRoutes = require("./routes/review.routes");

// APIs
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/reviews", reviewRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "RadiantSmiles Backend Running 🚀"
    });
});

module.exports = app;