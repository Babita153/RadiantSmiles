const Appointment = require("../models/appointment.model");
const User = require("../models/user.model");

// Book Appointment
exports.bookAppointment = async (req, res) => {
    try {
        const {
            firebaseUID,
            service,
            appointmentDate,
            appointmentTime,
            patientName,
            patientAge,
            patientGender,
            problemDescription
        } = req.body;

        const user = await User.findOne({ firebaseUID });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const appointment = await Appointment.create({
            user: user._id,
            doctorName: "Dr. Nakshita",
            service,
            appointmentDate,
            appointmentTime,
            patientName,
            patientAge,
            patientGender,
            problemDescription,
        });

        res.status(201).json({
            success: true,
            message: "Appointment Booked Successfully",
            appointment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Get User Appointments
exports.getUserAppointments = async (req, res) => {
    try {
        const { firebaseUID } = req.params;
        const user = await User.findOne({ firebaseUID });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const appointments = await Appointment.find({
            user: user._id
        }).sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            appointments
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Update Appointment
exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({
            success: true,
            appointment
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// Cancel Appointment
exports.cancelAppointment = async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Appointment Cancelled"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};