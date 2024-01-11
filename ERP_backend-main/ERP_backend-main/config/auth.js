// auth.js
import jwt from "jsonwebtoken";

const secretKey = "subarna"; // Replace this with your actual secret key

// Function to generate a JWT token
export const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: "1d" });
};

// Middleware to verify the JWT token and protect routes
export const verifyToken = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - No token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, secretKey);
    req.user = decodedToken.user; // Attach the user ID to the request object
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};
