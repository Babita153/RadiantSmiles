const { verifyFirebaseToken } = require("../services/firebase.service");
const User = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Authorization header missing",
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Invalid Authorization format",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = await verifyFirebaseToken(token);

    const user = await User.findOne({
      firebaseUID: decoded.uid,
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    req.user = user;
    req.firebaseUser = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      success: false,
      message: error.message,
    });

  }
};

module.exports = authMiddleware;