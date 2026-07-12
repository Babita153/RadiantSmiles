const express = require("express");
const router = express.Router();

const appointmentController = require("../controllers/appointment.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/",authMiddleware,appointmentController.bookAppointment);

router.get("/my",authMiddleware,appointmentController.getUserAppointments);

router.put("/:id",authMiddleware,appointmentController.updateAppointment);

router.delete("/:id",authMiddleware,appointmentController.cancelAppointment);

module.exports = router;
