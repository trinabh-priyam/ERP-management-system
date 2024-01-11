// controllers/jobController.js
import Job from "../models/job.js";

// Fetch all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add a new job
export const addJob = async (req, res) => {
  try {
    const { jobtitle, description, image } = req.body;

    const newJob = new Job({ jobtitle, description, image });
    await newJob.save();

    res.json(newJob);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


// Delete an job by ID
export const deleteJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    await Job.findByIdAndDelete(jobId);
    res.json({ message: "Exam deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};