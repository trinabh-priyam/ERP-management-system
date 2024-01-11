// models/staff.js
import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true, unique: true },
  salary: { type: Number },
  SID: { type: String, required: true, unique: true },
  subject: { type: String, required: true },
  role: { type: String, required: true },
});

const Staff = mongoose.model("Staff", staffSchema);

export default Staff;
