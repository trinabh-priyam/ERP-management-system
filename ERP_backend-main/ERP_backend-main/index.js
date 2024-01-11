import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDB } from "./config/db.js";

// Import route files
import studentRoutes from "./routes/student.js";
import staffRoutes from "./routes/staff.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import accountRoutes from "./routes/accounts.js";
import libraryRoutes from "./routes/library.js";
import palcementRoutes from "./routes/placement.js";
import jobRouter from "./routes/job.js";
import examRouter from "./routes/examination.js";
import attendanceRouter from "./routes/attendance.js";
import dmsrouter from "./routes/dms.js"


const app = express();
app.use(bodyParser.json());
app.use(cors());

connectToDB();

// Mount route files
app.use("/api", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api", staffRoutes);
app.use("/api", userRoutes);
app.use("/api", libraryRoutes);
app.use("/api/account", accountRoutes);
app.use("/api", palcementRoutes);
app.use("/api/jobs", jobRouter);
app.use("/api/exams", examRouter);
app.use("/api", attendanceRouter);
app.use("/api/dms", dmsrouter);

app.listen(5000, () => console.log("Server started on port 5000"));
