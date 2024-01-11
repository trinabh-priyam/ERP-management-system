import StudentList from "../models/student.js";

// Function to get account data by ID
export const getAccountById = async (req, res) => {
  try {
    const id = req.params.id;
    const account = await StudentList.findById(id);
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};









// Function to get account data by ID
export const getAccounts = async (req, res) => {
  try {
    const account = await StudentList.find();
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Function to update account data
export const updateAccount = async (req, res) => {
  try {
    const accountId = req.params.id;
    const { name, SIC, phone, dues } = req.body;

    const updatedAccount = await StudentList.findByIdAndUpdate(
      accountId,
      { name, SIC, phone, dues },
      { new: true }
    );

    if (!updatedAccount) {
      return res.status(404).json({ error: "Account not found" });
    }

    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
