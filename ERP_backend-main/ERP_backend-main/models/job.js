// models/job.js
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
