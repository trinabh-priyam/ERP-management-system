// routes/authRoutes.js
import express from "express";
import { signup, studentLogin,adminLogin,staffLogin } from "../controllers/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/student/login", studentLogin);
router.post("/admin/login", adminLogin);
router.post("/staff/login", staffLogin);

export default router;
