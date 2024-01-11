import express from "express";
const router = express.Router();
import {
  getAccounts,
  getAccountById,
  updateAccount,
} from "../controllers/accounts.js";

// Route to get accounts data
router.get("/", getAccounts);

// Route to get account data by ID
router.get("/:id", getAccountById);

// Route to update account data
router.patch("/:id", updateAccount);


export default router;
