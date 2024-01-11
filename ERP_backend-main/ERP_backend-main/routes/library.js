import express from "express";
const router = express.Router();
import {
  getLibData,
  getLibDataById,
  updateLibDataById,
} from "../controllers/library.js";

// Fetch all data
router.get("/library", getLibData);

// Fetch data by id
router.get("/library/:id", getLibDataById);

// Update data by ID
router.patch("/library/:id", updateLibDataById);

export default router;
