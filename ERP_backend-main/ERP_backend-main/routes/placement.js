// routes/placementRoutes.js
import express from "express";
import {
  getAllPlacements,
  updatePlacementById,
} from "../controllers/placement.js";

const router = express.Router();

// Fetch all placement data
router.get("/placement", getAllPlacements);

// Update placement data by SIC
router.patch("/placement/:id", updatePlacementById);

export default router;
