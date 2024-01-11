// controllers/attendanceController.js
import Attendance from "../models/attendance.js";

// Add attendance record
export const addAttendance = async (req, res) => {
  const { subject, date, attendance } = req.body;

  try {
    // Find if an attendance record already exists for the given subject and date
    let existingAttendance = await Attendance.findOne({ subject, date });

    if (!existingAttendance) {
      // If no attendance record exists, create a new one
      existingAttendance = new Attendance({
        subject,
        date,
        attendance,
      });
    } else {
      // If attendance record already exists, update the attendance data
      existingAttendance.attendance = attendance;
    }

    // Save the attendance record to the database
    await existingAttendance.save();

    res.json(existingAttendance);
  } catch (error) {
    res.status(500).json({ error: "Error adding attendance record" });
  }
};

// Fetch all attendance records
export const getAllAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find();
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
export const getAtt = async (req, res) => {
  try {
    const id = req.query.id; // Using req.query to access query parameters
    const targetDate = req.query.date;
    
    const attendanceRecords = await Attendance.find(
      { 'attendance.id': id, date: targetDate },
      { 'subject': 1, 'date': 1, 'attendance.$': 1 }
    );

    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error });
  }
};
