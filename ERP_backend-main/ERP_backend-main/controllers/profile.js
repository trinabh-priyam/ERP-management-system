import StudentList from "../models/student.js";
import Staff from "../models/staff.js";
import Admin from "../models/admin.js";

// Function to get user data by ID
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user =
      (await StudentList.findById(userId)) ||
      (await Admin.findById(userId)) ||
      (await Staff.findById(userId));
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to update user profile
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, role, email, phone, SID, SIC, branch, section, subject } =
      req.body;

    let user;

    if (role === "Student") {
      user = await StudentList.findByIdAndUpdate(
        userId,
        { name, email, phone, SID, SIC, branch, section },
        { new: true }
      );
    } else if (role === "Staff") {
      user = await Staff.findByIdAndUpdate(
        userId,
        { name, email, phone, SID, subject },
        { new: true }
      );
    } else if (role === "Admin") {
      user = await Admin.findByIdAndUpdate(
        userId,
        { name, email, phone },
        { new: true }
      );
    } else {
      return res.status(400).json({ error: "Invalid role" });
    }

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
