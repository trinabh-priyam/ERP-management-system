import Student from "../models/student.js";

// Function to get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to delete a student by SIC
export const deleteStudentBySIC = async (req, res) => {
  const { SIC } = req.params;
  try {
    const deletedStudent = await Student.findOneAndDelete({ SIC });
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to edit a student by SIC
export const editStudentBySIC = async (req, res) => {
  const { SIC } = req.params;
  try {
    const updatedStudent = await Student.findOneAndUpdate({ SIC }, req.body, {
      new: true,
    });
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
