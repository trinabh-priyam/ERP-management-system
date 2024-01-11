
import Dms from "../models/dms.js"

export const getAllDms = async (req, res) => {
  try {
    const dms = await Dms.find();
    res.json(dms);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};


export const addDms = async (req, res) => {
  try {
    const { dmsUserName, description,date } = req.body;

    const newDms = new Dms({ dmsUserName, description, date });
    await newDms.save();

    res.json(newDms);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteDmsById = async (req, res) => {
  try {
    const dmsId = req.params.id;
    await Dms.findByIdAndDelete(dmsId);
    res.json({ message: "Dms deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};