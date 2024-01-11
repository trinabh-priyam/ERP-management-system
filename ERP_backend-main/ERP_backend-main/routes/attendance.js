// routes.js
import express from "express";
import { getAllAttendance, addAttendance,getAtt } from "../controllers/attendance.js";

const router = express.Router();

// Attendance routes
router.get("/attendance", getAllAttendance); // Fetch all attendance records
router.post("/attendance", addAttendance); // Create a new attendance record
router.get('/studentattendance',getAtt)

export default router;
