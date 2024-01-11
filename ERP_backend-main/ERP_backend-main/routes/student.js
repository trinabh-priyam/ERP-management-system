// routes/studentRoutes.js
import express from "express";
import { deleteStudentBySIC, editStudentBySIC, getAllStudents } from "../controllers/student.js";

const router = express.Router();

// Route to get all students
router.get("/students", getAllStudents);

// Route to edit a student
router.patch("/students", editStudentBySIC);

// Route to delete a student
router.delete("/students/:SIC", deleteStudentBySIC);

export default router;
