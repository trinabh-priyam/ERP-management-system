import express from "express";
import { getAllDms, addDms, deleteDmsById } from "../controllers/dms.js";


const router = express.Router();


router.get("/", getAllDms);

router.post("/", addDms);


router.delete("/:id", deleteDmsById);

export default router;