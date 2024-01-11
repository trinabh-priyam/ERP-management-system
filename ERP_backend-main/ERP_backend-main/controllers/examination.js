// controllers/examController.js
import Exam from "../models/examination.js";

// Fetch all exams
export const getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add a new exam
export const addExam = async (req, res) => {
  try {
    const { examname,date,time ,subject } = req.body;

    if (!examname || !date || !time|| !subject) {
      return res.status(400).json({ error: "Please provide all fields" });
    }

    const newExam = new Exam({ examname,date,time, subject });
    await newExam.save();

    res.json(newExam);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete an exam by ID
export const deleteExamById = async (req, res) => {
    try {
      const examId = req.params.id;
      await Exam.findByIdAndDelete(examId);
      res.json({ message: "Exam deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
  
