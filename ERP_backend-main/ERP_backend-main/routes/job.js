// routes/jobRouter.js
import express from "express";
import { getAllJobs, addJob,deleteJobById } from "../controllers/job.js";

const router = express.Router();

// GET all jobs
router.get("/", getAllJobs);

// POST a new job
router.post("/", addJob);

// Delete an job by ID
router.delete("/:id", deleteJobById);

export default router;
