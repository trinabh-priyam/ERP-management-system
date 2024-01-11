// models/student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  password: { type: String, required: true },
  section: { type: String, required: true },
  branch: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  SIC: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  dues: { type: Number, },
  packageSal: { type: Number, },
  fine: { type: Number, },
  issueDate: { type: String, },
  returnDate: { type: String, },
  role: { type: String, required: true },
  company: { type: String },
  book: { type: String},
});

const StudentList = mongoose.model("StudentList", studentSchema);

export default StudentList;
