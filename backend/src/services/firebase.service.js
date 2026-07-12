const { auth } = require("../config/firebase");

const verifyFirebaseToken = async (token) => {
  try {
    const decodedToken = await auth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    throw new Error("Invalid Firebase Token");
  }
};

module.exports = {
  verifyFirebaseToken,
};