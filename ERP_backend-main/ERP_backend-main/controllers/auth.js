// controllers/authController.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/student.js";

import Student from "../models/student.js";
import Admin from "../models/admin.js";
import Staff from "../models/staff.js";

const secretKey = "subarna"; // Replace this with your actual secret key

export const signup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      section,
      branch,
      SIC,
      rollNo,
      phone,
      role,
      dues,
      packageSal,
      fine,
      issueDate,
      returnDate,
      company,
      book,
    } = req.body;

    // Check if the email already exists
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new student
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      section,
      branch,
      SIC,
      rollNo,
      phone,
      role,
      dues,
      packageSal,
      fine,
      issueDate,
      returnDate,
      company,
      book,
    });
    await newStudent.save();

    res.status(200).json({ message: "Student registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// Student Login
export const studentLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const data = {
      user: {
        id: user._id,
        name:user.name,
        role: "Student",
      },
    };
    const token = jwt.sign(data, secretKey, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, admin.password);
    if (!passwordCompare) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate and send the JWT token for admin
    const data = {
      user: {
        id: admin._id,
        name:admin.name,
        role: "Admin",
      },
    };
    const token = jwt.sign(data, secretKey, { expiresIn: "1d" });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

export const staffLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const staff = await Staff.findOne({ email });
    if (!staff) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, staff.password);
    if (!passwordCompare) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate and send the JWT token for staff
    const data = {
      user: {
        id: staff._id,
        name:staff.name,
        subject:staff.subject,
        role: "Staff",
      },
    };
    const token = jwt.sign(data, secretKey, { expiresIn: "1d" });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
