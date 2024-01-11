import express from "express";
import { getUserById, updateUserProfile } from "../controllers/profile.js";

const router = express.Router();

// Route to get user data by ID
router.get("/user/:id", getUserById);
router.patch("/user/:id", updateUserProfile);

export default router;
