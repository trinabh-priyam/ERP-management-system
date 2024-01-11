// models/attendance.js
import mongoose from "mongoose";

const attendanceRecordSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  SIC: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent"],
    required: true,
  },
});

const attendanceSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  attendance: [attendanceRecordSchema],
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
