const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firebaseUID: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    phone: {
      type: String,
      default: "",
    },

    age: {
      type: Number,
      default: null,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      default: "Male",
    },

    profileImage: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      default: "patient",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("patient", userSchema)

module.exports = userModel;

// module.exports = mongoose.model("User", userSchema);