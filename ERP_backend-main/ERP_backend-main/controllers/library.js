import StudentList from "../models/student.js";

export const getLibData = async (req, res) => {
  try {
    const data = await StudentList.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getLibDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await StudentList.findById(id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
}
};

export const updateLibDataById = async (req, res) => {
  try {
    const id = req.params.id;
    const { issueDate,returnDate,book} = req.body;


    const updatedLibrary = await StudentList.findOneAndUpdate(
      { _id: id },
      { issueDate, returnDate,book },
      {new:true}
    );

    if (!updatedLibrary) {
      return res.status(404).json({ error: "Libaray data not found" });
    }

    res.json(updatedLibrary);
  } catch (error) {
    res.status(500).json({ error })
};
}
