import bcrypt from "bcryptjs";

import Staff from "../models/staff.js";

// Function to create a new staff
export const createStaff = async (req, res) => {
  try {
    const { name, email, password, role, subject, SID, phone,salary } = req.body;

    // Check if the email already exists
    const existingStaff = await Staff.findOne({ email });
    // console.log(existingStaff);
    if (existingStaff) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStaff = new Staff({
      name,
      email,
      password: hashedPassword,
      role,
      subject,
      SID,
      phone,
      salary,
    });
    const savedStaff = await newStaff.save();
    // console.log(savedStaff);
    res.status(201).json(savedStaff);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to get all staffs
export const getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find();
    res.json(staffs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to delete a staff by SID
export const deleteStaffBySID = async (req, res) => {
  try {
    const { SID } = req.params;
    const deletedStaff = await Staff.findOneAndDelete({ SID });
    if (!deletedStaff) {
      return res.status(404).json({ error: "Staff not found" });
    }
    res.json(deletedStaff);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to edit a staff by SID
export const editStaffBySID = async (req, res) => {
  try {
    const { SID } = req.params;
    const { name, email, password, role, subject, phone } = req.body;
    const updatedStaff = await Staff.findOneAndUpdate(
      { SID },
      { name, email, password, role, subject, phone },
      { new: true }
    );
    if (!updatedStaff) {
      return res.status(404).json({ error: "Staff not found" });
    }
    res.json(updatedStaff);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// Function to get staff data by ID
export const getParticularStaff = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = (await Staff.findById(userId));
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};