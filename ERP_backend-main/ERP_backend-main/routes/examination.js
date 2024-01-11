// routes/examRouter.js
import express from "express";
import { getAllExams, addExam ,deleteExamById} from "../controllers/examination.js";

const router = express.Router();

// GET all exams
router.get("/", getAllExams);

// POST a new exam
router.post("/", addExam);

// Delete an exam by ID
router.delete("/:id", deleteExamById);

export default router;
