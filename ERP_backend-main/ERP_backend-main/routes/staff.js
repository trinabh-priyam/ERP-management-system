// routes/staff.js
import express from "express";
import { createStaff, deleteStaffBySID, editStaffBySID, getAllStaffs,getParticularStaff } from "../controllers/staff.js";

const router = express.Router();

// Route to create a new staff
router.post("/staffs", createStaff);

// Route to get all staffs
router.get("/staffs", getAllStaffs);

// Route to get particular staffs
router.get("/staff/:id", getParticularStaff);

// Route to edit a staff
router.patch("/staffs", editStaffBySID);

// Route to delete a staff
router.delete("/staffs/:SID", deleteStaffBySID);

export default router;
