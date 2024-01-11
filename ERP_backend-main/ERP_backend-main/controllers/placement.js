// controllers/placementController.js
import StudentList from "../models/student.js";

// Fetch all placement data
export const getAllPlacements = async (req, res) => {
  try {
    const placements = await StudentList.find();
    res.json(placements);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};



export const updatePlacementById = async (req, res) => {
  try {
    const id = req.params.id;
    const { company, packageSal } = req.body;

    const updatedPlacement = await StudentList.findOneAndUpdate(
      { _id: id }, // Use _id instead of id
      { company, packageSal },
      { new: true }
    );

    if (!updatedPlacement) {
      return res.status(404).json({ error: "Placement data not found" });
    }

    res.json(updatedPlacement);
  } catch (error) {
    res.status(500).json({ error });
  }
};

