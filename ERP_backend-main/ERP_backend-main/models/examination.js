// models/exam.js
import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  examname: { type: String, required: true },
  date: {
    type: String,
    required: true,
  },
  time:{
    type:String,
    required :true,
  },
  subject: {
    type: String,
    required: true,
  },
});

const Exam = mongoose.model("Exam", examSchema);

export default Exam;
